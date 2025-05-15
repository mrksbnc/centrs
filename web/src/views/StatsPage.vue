<template>
	<div class="stats-page">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
			<div class="bg-white shadow-lg rounded-xl p-8">
				<h2 class="text-3xl font-bold mb-6 text-cente text-gray-900r">Your Stats</h2>

				<div v-if="!hasStats" class="text-center py-8">
					<p class="text-lg mb-6 text-gray-600">You haven't completed any challenges yet.</p>
					<router-link
						to="/start"
						class="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
					>
						Start Your First Challenge
					</router-link>
				</div>

				<div v-else>
					<!-- Summary Stats -->
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						<div class="rounded-lg p-6 text-center bg-gray-100">
							<h3 class="text-sm font-medium uppercase tracking-wide mb-1 text-gray-500">
								Challenges Completed
							</h3>
							<p class="text-3xl font-bold text-gray-900">
								{{ gamesPlayed }}
							</p>
						</div>

						<div class="rounded-lg p-6 text-center text-gray-900">
							<h3 class="text-sm font-medium uppercase tracking-wide mb-1 text-gray-500">
								Average Score
							</h3>
							<p class="text-3xl font-bold text-gray-900">{{ averageScore }}%</p>
						</div>

						<div class="rounded-lg p-6 text-center text-gray-900">
							<h3 class="text-sm font-medium uppercase tracking-wide mb-1 text-gray-900">
								Best Score
							</h3>
							<p class="text-3xl font-bold text-gray-900">{{ bestScore }}%</p>
						</div>
					</div>

					<!-- Recent Results -->
					<h3 class="text-xl font-semibold mb-4 text-gray-900">Recent Results</h3>

					<div class="space-y-4">
						<div
							v-for="(group, index) in groupedAnswers"
							:key="index"
							text-gray-900
							class="rounded-lg p-4"
						>
							<div class="flex justify-between items-center mb-2">
								<span class="font-medium text-gray-900"> Game {{ index + 1 }} </span>
								<span class="text-sm text-gray-500">
									{{ formatDate(group[0].timestamp) }}
								</span>
							</div>
							<div class="font-medium text-gray-900">
								Score: {{ calculateScore(group) }}/{{ group.length }} ({{
									Math.round((calculateScore(group) / group.length) * 100)
								}}%)
							</div>
						</div>
					</div>

					<div class="mt-8 text-center">
						<router-link
							to="/start"
							class="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
						>
							Play Again
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGame, type UserResult } from '../composables/game';

const game = useGame();

const userAnswers = computed<UserResult[]>(() => game.game.value.userAnswers);
const hasStats = computed(() => userAnswers.value.length > 0);

const groupedAnswers = computed(() => {
	const sorted = [...userAnswers.value].sort(
		(a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
	);

	const groups: UserResult[][] = [];
	let currentGroup: UserResult[] = [];
	let lastTimestamp: number | null = null;

	sorted.forEach((answer) => {
		const currentTimestamp = new Date(answer.timestamp).getTime();

		// If this is a new game (more than 5 minutes from the last answer)
		if (
			lastTimestamp === null ||
			currentTimestamp - lastTimestamp > 5 * 60 * 1000 ||
			currentGroup.length >= 5
		) {
			if (currentGroup.length > 0) {
				groups.push([...currentGroup]);
			}
			currentGroup = [answer];
		} else {
			currentGroup.push(answer);
		}

		lastTimestamp = currentTimestamp;
	});

	// Add the last group
	if (currentGroup.length > 0) {
		groups.push(currentGroup);
	}

	return groups;
});

const gamesPlayed = computed(() => groupedAnswers.value.length);

const averageScore = computed(() => {
	if (groupedAnswers.value.length === 0) return 0;

	const total = groupedAnswers.value.reduce((sum, group) => {
		return sum + calculateScore(group) / group.length;
	}, 0);

	return Math.round((total / groupedAnswers.value.length) * 100);
});

const bestScore = computed(() => {
	if (groupedAnswers.value.length === 0) return 0;

	const scores = groupedAnswers.value.map((group) =>
		Math.round((calculateScore(group) / group.length) * 100),
	);

	return Math.max(...scores);
});

// Methods
function calculateScore(answers: UserResult[]): number {
	return answers.filter((a) => a.isCorrect).length;
}

function formatDate(timestamp: string): string {
	const date = new Date(timestamp);
	return date.toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
</script>
