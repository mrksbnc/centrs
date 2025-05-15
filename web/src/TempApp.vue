<template>
	<div class="app-wrapper font-mono">
		<main class="flex-grow">
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</RouterView>
		</main>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
	height: 100%;
}

.app-wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* Dark mode transitions */
.dark {
	color-scheme: dark;
}

/* Default light mode variables */
:root {
	--background-color: #f9fafb;
	--text-color: #111827;
	--card-bg: #ffffff;
}

/* Dark mode variables */
.dark {
	--background-color: #111827;
	--text-color: #f9fafb;
	--card-bg: #1f2937;
}
</style>
