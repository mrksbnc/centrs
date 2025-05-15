<template>
	<div class="keynote-results-container py-4">
		<h1 class="text-4xl font-bold mb-8" :class="isDark ? 'text-white' : 'text-gray-900'">
			Your Results
		</h1>

		<div class="mb-12">
			<div class="text-7xl font-bold mb-4" :class="scoreColor">{{ score }}/{{ total }}</div>
			<p class="text-2xl font-semibold mb-6" :class="isDark ? 'text-white' : 'text-gray-900'">
				{{ scoreMessage }}
			</p>
			<p
				class="text-xl max-w-2xl mx-auto mb-10"
				:class="isDark ? 'text-gray-300' : 'text-gray-600'"
			>
				{{ message }}
			</p>
		</div>

		<!-- Question Analysis -->
		<div v-if="showDetails" class="mb-12">
			<h2 class="text-2xl font-semibold mb-8" :class="isDark ? 'text-white' : 'text-gray-900'">
				Analysis
			</h2>

			<div class="space-y-6 max-w-3xl mx-auto">
				<div
					v-for="(result, index) in results"
					:key="result.contentId"
					class="p-6 rounded-xl"
					:class="
						result.isCorrect
							? 'bg-green-100/30 dark:bg-green-900/20'
							: 'bg-red-100/30 dark:bg-red-900/20'
					"
				>
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center">
							<span
								class="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 text-white text-lg"
								:class="result.isCorrect ? 'bg-green-500' : 'bg-red-500'"
							>
								<span v-if="result.isCorrect">✓</span>
								<span v-else>✗</span>
							</span>
							<span class="text-xl font-medium" :class="isDark ? 'text-white' : 'text-gray-900'"
								>Item {{ index + 1 }}</span
							>
						</div>
						<span class="text-base" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
							{{ getContentType(result.contentId) }}
						</span>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<p class="text-base" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
							<span class="font-medium">Your assessment:</span>
							{{ result.userGuess ? 'AI-Generated' : 'Human-Created' }}
						</p>
						<p class="text-base" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
							<span class="font-medium">Actual source:</span>
							{{ getCorrectAnswer(result.contentId) ? 'AI-Generated' : 'Human-Created' }}
						</p>
					</div>

					<p
						v-if="getExplanation(result.contentId)"
						class="text-base italic mt-4"
						:class="isDark ? 'text-gray-300' : 'text-gray-600'"
					>
						{{ getExplanation(result.contentId) }}
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col sm:flex-row justify-center gap-6">
			<button @click="$emit('restart')" class="action-button blue-gradient">
				<span class="flex items-center">
					<svg
						class="w-5 h-5 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						/>
					</svg>
					Try Again
				</span>
			</button>

			<button @click="toggleDetails" class="action-button gray-gradient">
				<span class="flex items-center">
					<svg
						v-if="showDetails"
						class="w-5 h-5 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
						/>
					</svg>
					<svg
						v-else
						class="w-5 h-5 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
					{{ showDetails ? 'Hide Analysis' : 'View Analysis' }}
				</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { UserResult } from '@/composables/game';
import { computed, ref } from 'vue';
import type { ContentItem } from '../../mock/mockData';

interface Props {
	results: UserResult[];
	questions: ContentItem[];
	message: string;
	isDark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	isDark: false,
});

// Emit events
defineEmits<{
	(e: 'restart'): void;
}>();

// Local state
const showDetails = ref(false);

// Computed properties
const score = computed(() => {
	return props.results.filter((r) => r.isCorrect).length;
});

const total = computed(() => {
	return props.results.length;
});

const accuracy = computed(() => {
	if (total.value === 0) return 0;
	return (score.value / total.value) * 100;
});

const scoreColor = computed(() => {
	if (accuracy.value >= 70) return 'text-green-500';
	if (accuracy.value >= 40) return 'text-yellow-500';
	return 'text-red-500';
});

const scoreMessage = computed(() => {
	if (accuracy.value >= 80) return 'Exceptional!';
	if (accuracy.value >= 60) return 'Well Done!';
	if (accuracy.value >= 40) return 'Good Effort!';
	return 'Keep Practicing!';
});

// Methods
function toggleDetails() {
	showDetails.value = !showDetails.value;
}

function getContentType(contentId: string): string {
	const question = props.questions.find((q) => q.id === contentId);
	return question?.type === 'image' ? 'Image' : 'Text';
}

function getCorrectAnswer(contentId: string): boolean {
	const question = props.questions.find((q) => q.id === contentId);
	return !!question?.isAI;
}

function getExplanation(contentId: string): string | undefined {
	const question = props.questions.find((q) => q.id === contentId);
	return question?.explanation;
}
</script>

<style scoped>
.keynote-results-container {
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	text-align: center;
}

.action-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1.75rem;
	font-size: 1rem;
	font-weight: 600;
	color: white;
	border-radius: 1.5rem;
	cursor: pointer;
	transition: all 0.2s ease;
	border: none;
	min-width: 140px;
}

.blue-gradient {
	background: linear-gradient(135deg, #0071e3, #42a0ff);
	box-shadow: 0 2px 8px rgba(0, 113, 227, 0.4);
}

.blue-gradient:hover {
	background: linear-gradient(135deg, #0077ed, #47a5ff);
	transform: translateY(-1px);
	box-shadow: 0 4px 12px rgba(0, 113, 227, 0.5);
}

.gray-gradient {
	background: linear-gradient(135deg, #6e6e73, #86868b);
	box-shadow: 0 2px 8px rgba(110, 110, 115, 0.4);
}

.gray-gradient:hover {
	background: linear-gradient(135deg, #7a7a80, #95959a);
	transform: translateY(-1px);
	box-shadow: 0 4px 12px rgba(110, 110, 115, 0.5);
}

.action-button:active {
	transform: translateY(0);
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

/* Hide the old button styles */
.keynote-button,
.blue-button,
.gray-button {
	display: none;
}
</style>
