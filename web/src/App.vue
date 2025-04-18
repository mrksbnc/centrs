<template>
	<div
		:class="[
			darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black',
			'min-h-screen font-mono transition-colors duration-500',
		]"
	>
		<!-- Navigation -->
		<nav
			:class="[
				darkMode ? 'bg-gray-900 bg-opacity-90' : 'bg-gray-100 bg-opacity-90',
				'fixed top-0 w-full py-4 px-6 flex justify-between items-center z-50 transition-colors duration-500',
			]"
		>
			<router-link
				:to="{
					name: CentrsRouteName.Home,
					hash: '#home',
				}"
				class="hover:underline flex items-center space-x-2"
			>
				<h1 class="font-bold tracking-tight">BENCE MARKUS</h1>
			</router-link>
			<div class="flex items-center space-x-6">
				<!-- <router-link
					:to="{
						name: CentrsRouteName.Projects,
					}"
					class="hover:underline"
				>
					PROJECTS
				</router-link> -->
				<router-link
					:to="{
						name: CentrsRouteName.Home,
						hash: '#about',
					}"
					class="hover:underline"
				>
					ABOUT
				</router-link>
				<router-link
					:to="{
						name: CentrsRouteName.Home,
						hash: '#contact',
					}"
					class="hover:underline"
				>
					CONTACT
				</router-link>

				<button
					@click="toggleDarkMode"
					class="ml-4 w-10 h-6 relative rounded-full flex items-center border"
					:class="darkMode ? 'border-gray-600' : 'border-gray-400'"
				>
					<span class="sr-only">Toggle dark mode</span>
					<span
						:class="[
							darkMode ? 'translate-x-5 bg-white' : 'translate-x-1 bg-black',
							'absolute w-4 h-4 rounded-full transition-transform duration-300 ease-in-out',
						]"
					></span>
				</button>
			</div>
		</nav>

		<HomeView :dark-mode="darkMode" />

		<!-- Footer -->
		<footer
			:class="[
				darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300',
				'py-6 border-t transition-colors duration-500',
			]"
		>
			<div class="container mx-auto px-6 flex justify-between items-center">
				<p class="text-sm">{{ currentYear }} BENCE MARKUS</p>
				<div
					:class="[
						darkMode ? 'border-white' : 'border-black',
						'w-8 h-8 flex items-center justify-center border transition-colors duration-500',
					]"
				>
					<div
						:class="[darkMode ? 'bg-white' : 'bg-black', 'w-4 h-4 transition-colors duration-500']"
					></div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { CentrsRouteName } from './router/constants';
import HomeView from './views/HomeView.vue';

const darkMode = ref(false);
const tileOpacity = ref(Array.from({ length: 64 }, () => Math.random() * 0.5 + 0.5));

const animationInterval = ref<number | null>(2000);
const currentYear = new Date().getFullYear();

function toggleDarkMode() {
	darkMode.value = !darkMode.value;

	localStorage.setItem('darkMode', darkMode.value.toString());
	animateTiles();
}

function animateTiles() {
	for (let i = 0; i < tileOpacity.value.length; i++) {
		setTimeout(() => {
			tileOpacity.value[i] = Math.random() * 0.5 + 0.5;
		}, i * 20);
	}
}

function animateRandomTiles() {
	const numTilesToAnimate = 10;

	for (let i = 0; i < numTilesToAnimate; i++) {
		const randomIndex = Math.floor(Math.random() * 64);
		tileOpacity.value[randomIndex] = Math.random() * 0.5 + 0.5;
	}
}

onMounted(() => {
	const savedDarkMode = localStorage.getItem('darkMode');
	const preferedDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (savedDarkMode || preferedDarkMode) {
		darkMode.value = savedDarkMode === 'true';
	}

	animationInterval.value = window.setInterval(animateRandomTiles, 2000);
});

onUnmounted(() => {
	if (animationInterval.value) {
		clearInterval(animationInterval.value);
	}
});
</script>

<style>
html {
	scroll-behavior: smooth;
}

body {
	font-feature-settings: 'tnum', 'ss01', 'ss02';
	-webkit-font-smoothing: antialiased;
}

/* Fade-in animation for page load */
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.page-enter-active {
	animation: fadeIn 0.8s ease-out;
}
</style>
