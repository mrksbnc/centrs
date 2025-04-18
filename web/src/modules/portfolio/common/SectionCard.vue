<template>
	<div class="group" v-scroll-reveal="{ delay: 200 }">
		<div class="aspect-w-16 aspect-h-9 bg-gray-900 mb-4 overflow-hidden relative">
			<div class="absolute inset-0 flex items-center justify-center">
				<div
					class="h-24 w-24 bg-gradient-to-br from-cyan-300 to-pink-300 transform rotate-45 transition-transform duration-500 group-hover:scale-110"
				></div>
			</div>
			<div
				class="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-500"
			></div>
		</div>
		<div class="flex flex-col gap-2">
			<h3 class="text-xl font-medium mb-2">{{ title }}</h3>
			<p :class="darkMode ? 'text-gray-300' : 'text-gray-700'">{{ content }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	darkMode: boolean;
	title: string;
	content: string;
}>();

const vScrollReveal = {
	mounted: (el: HTMLElement, binding: any) => {
		const delay = binding.value?.delay || 0;

		setTimeout(() => {
			// Start with opacity 0
			el.style.opacity = '0';
			el.style.transform = 'translateY(20px)';
			el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setTimeout(() => {
								el.style.opacity = '1';
								el.style.transform = 'translateY(0)';
							}, 100);
							observer.unobserve(el);
						}
					});
				},
				{ threshold: 0.1 },
			);

			observer.observe(el);
		}, delay);
	},
};
</script>
