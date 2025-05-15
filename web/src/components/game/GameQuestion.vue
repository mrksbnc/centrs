<template>
	<div class="keynote-question-container" :key="renderkey">
		<div class="relative mb-8">
			<div v-if="question && question.type === 'image'" class="w-full">
				<img
					:src="question.content"
					:alt="question.isAI ? 'AI Generated Content' : 'Human Created Content'"
					class="w-full h-80 object-cover rounded-xl shadow-lg"
				/>
			</div>

			<div v-else-if="question && question.type === 'text'" class="p-6 max-w-3xl mx-auto">
				<p class="text-lg leading-relaxed text-gray-800">
					{{ question.content }}
				</p>
			</div>

			<div v-else class="p-8 text-center">
				<p class="text-xl text-gray-800">No content available</p>
			</div>
		</div>

		<div class="text-center mb-8">
			<h2 class="text-2xl font-semibold mb-6 text-gray-800">
				Is this {{ question?.type === 'image' ? 'image' : 'text' }} created by a human or generated
				by AI?
			</h2>

			<div class="flex justify-center gap-4">
				<button @click="submitAnswer(false)" class="compact-button human-button">
					<span class="button-content">
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
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						Human
					</span>
				</button>
				<button @click="submitAnswer(true)" class="compact-button ai-button">
					<span class="button-content">
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
								d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						AI
					</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useGame } from '@/composables/game';
import { computed, onBeforeMount, ref } from 'vue';

const renderkey = ref(0);

const gameStore = useGame();

const question = computed(
	() => gameStore.game.value.questions[gameStore.game.value.currentQuestionIndex],
);

function submitAnswer(isAI: boolean) {
	gameStore.answerQuestion(isAI);

	renderkey.value += 1;
}

onBeforeMount(() => {
	gameStore.startGame();
});
</script>

<style scoped>
.keynote-question-container {
	width: 100%;
	max-width: 850px;
	margin: 0 auto;
}

.compact-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.625rem 1.5rem;
	font-size: 1rem;
	font-weight: 600;
	color: white;
	border-radius: 1.5rem;
	cursor: pointer;
	transition: all 0.2s ease;
	border: none;
	min-width: 120px;
}

.button-content {
	display: flex;
	align-items: center;
	justify-content: center;
}

.human-button {
	background: linear-gradient(135deg, #5e5ce6, #7a78f3);
	box-shadow: 0 2px 8px rgba(94, 92, 230, 0.4);
}

.human-button:hover {
	background: linear-gradient(135deg, #4d4bd8, #6a68e3);
	transform: translateY(-1px);
	box-shadow: 0 4px 12px rgba(94, 92, 230, 0.5);
}

.ai-button {
	background: linear-gradient(135deg, #fa5347, #ff756a);
	box-shadow: 0 2px 8px rgba(250, 83, 71, 0.4);
}

.ai-button:hover {
	background: linear-gradient(135deg, #f03c30, #ff6258);
	transform: translateY(-1px);
	box-shadow: 0 4px 12px rgba(250, 83, 71, 0.5);
}

.compact-button:active {
	transform: translateY(0);
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

.compact-button:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}
</style>
