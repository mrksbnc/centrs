<template>
	<div
		class="start-game-page select-none font-mono min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center px-4 py-16 overflow-auto"
	>
		<div class="h-[100vh] max-w-5xl mx-auto flex flex-col gap-4 justify-evenly">
			<!-- Main Hero Section -->
			<div class="mb-16">
				<h1
					class="text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
				>
					Aged Like Milk
				</h1>
				<h5 class="text-md text-gray-500 dark:text-gray-400">
					Hitchhiker's Guide to a reality in flux
				</h5>
				<div class="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
					<div class="text-left max-w-xl mx-auto mt-6">
						<p class="text-md mb-4 dark:text-gray-300 text-gray-700 text-center">
							Can you identify which is authentic and which is fabricated? Challenge your perception
							and discover how sharp your detection skills truly are.
						</p>
					</div>
				</div>
			</div>

			<!-- Start Button -->
			<div class="flex justify-center">
				<button @click="startGame" class="action-button" type="button">
					<span class="flex items-center">
						<span class="mr-2">Begin Challenge</span>
						<svg
							class="w-4 h-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</span>
				</button>
			</div>

			<!-- How to Play Cards -->
			<div class="mb-16 flex-wrap">
				<h2 class="text-3xl font-bold mb-10 dark:text-white text-gray-900">How to Play</h2>

				<div class="flex flex-col gap-2">
					<div class="flex gap-2">
						<div class="step-card w-[50%]">
							<div class="step-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8"
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
							</div>
							<h3 class="text-xl font-semibold mb-3 dark:text-white text-gray-900">Analyze</h3>
							<p class="dark:text-gray-300 text-gray-700">
								Examine content carefully to identify patterns and inconsistencies
							</p>
						</div>

						<!-- Step 2 -->
						<div class="step-card w-[50%]">
							<div class="step-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
									/>
								</svg>
							</div>
							<h3 class="text-xl font-semibold mb-3 dark:text-white text-gray-900">Decide</h3>
							<p class="dark:text-gray-300 text-gray-700">
								Select whether the content was human-created or AI-generated
							</p>
						</div>
					</div>
					<div class="flex gap-2">
						<!-- Step 3 -->
						<div class="step-card w-[50%]">
							<div class="step-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
							</div>
							<h3 class="text-xl font-semibold mb-3 dark:text-white text-gray-900">Evaluate</h3>
							<p class="dark:text-gray-300 text-gray-700">
								Complete all questions to review your performance and accuracy
							</p>
						</div>

						<!-- Step 4 -->
						<div class="step-card w-[50%]">
							<div class="step-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
									/>
								</svg>
							</div>
							<h3 class="text-xl font-semibold mb-3 dark:text-white text-gray-900">Learn</h3>
							<p class="dark:text-gray-300 text-gray-700">
								Gain insights on detection techniques and improve your skills
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useGame } from '@/composables/game';
import { useRouter } from 'vue-router';

const gameStore = useGame();
const router = useRouter();

// Function to navigate to game page and ensure clean state
function startGame() {
	console.log('Starting game...');
	gameStore.startGame();
	router.push('/game');
}
</script>

<style scoped>
.start-game-page {
	transition: background-color 0.3s ease;
}

.step-card {
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 16px;
	padding: 2rem 1.5rem;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
	position: relative;
}

.dark .step-card {
	background-color: rgba(30, 41, 59, 0.8);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.step-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.dark .step-card:hover {
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.step-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	margin-bottom: 1.25rem;
	background: linear-gradient(135deg, #0071e3, #42a0ff);
	color: white;
	border-radius: 50%;
}

.action-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1.75rem;
	font-size: 1rem;
	font-weight: 600;
	color: white;
	background: linear-gradient(135deg, #0071e3, #42a0ff);
	border-radius: 1.5rem;
	cursor: pointer;
	transition: all 0.2s ease;
	border: none;
	box-shadow: 0 2px 10px rgba(0, 113, 227, 0.4);
}

.action-button:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 15px rgba(0, 113, 227, 0.5);
	background: linear-gradient(135deg, #0077ed, #47a5ff);
}

.action-button:active {
	transform: translateY(0);
	box-shadow: 0 2px 8px rgba(0, 113, 227, 0.4);
}

@media (prefers-color-scheme: dark) {
	.step-card {
		background-color: rgba(30, 41, 59, 0.8);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
	}

	.step-card:hover {
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}
}
</style>
