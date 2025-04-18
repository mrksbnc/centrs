<template>
	<!-- Home Section -->
	<section id="home" class="min-h-screen flex flex-col justify-center relative overflow-hidden">
		<div class="absolute inset-0 flex items-center justify-center opacity-20">
			<div class="grid grid-cols-8 gap-4 w-full h-full">
				<div
					v-for="i in 64"
					:key="i"
					:class="[
						darkMode ? 'bg-gray-300' : 'bg-black',
						'h-full w-full transform transition-all duration-700 ease-in-out',
					]"
					:style="{ transitionDelay: `${i * 10}ms`, opacity: tileOpacity[i - 1] }"
				></div>
			</div>
		</div>
		<div class="container mx-auto px-6 z-10 absolute top-1/2">
			<div class="flex flex-col md:flex-row items-center md:items-start gap-12">
				<div class="max-w-2xl">
					<h1 class="text-6xl font-bold mb-6 leading-none tracking-tighter">
						SOFTWARE<br />
						DEVELOPER
					</h1>
					<div class="mt-12 relative flex justify-center content-center">
						<div
							:class="[
								darkMode ? 'bg-white' : 'bg-black',
								'absolute -left-6 top-1/2 w-4 h-4 transition-colors duration-500',
							]"
						></div>
						<p class="text-xl leading-relaxed">
							Building secure, scalable, software solutions for the modern web.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="absolute bottom-12 left-1/2 transform -translate-x-1/2">
			<div
				:class="[
					darkMode ? 'bg-white' : 'bg-black',
					'h-8 w-px animate-pulse transition-colors duration-500',
				]"
			></div>
		</div>
	</section>

	<!-- Projects Section -->
	<section
		id="work"
		:class="[darkMode ? 'bg-gray-800' : 'bg-white', 'py-22 transition-colors duration-500']"
	>
		<div class="container mx-auto px-6">
			<h2 class="text-3xl font-bold mb-16 tracking-tight">WORK</h2>
			<p class="text-md mb-6">
				Currently I'm working by
				<a href="https://valarian.com" class="hover:underline font-bold italic">Valarian</a> where
				I'm building secure and scalable web applications.
			</p>
		</div>
	</section>

	<!-- About Section -->
	<section
		id="about"
		:class="[darkMode ? 'bg-gray-900' : 'bg-gray-100', 'py-32 transition-colors duration-500']"
	>
		<div class="container mx-auto px-6">
			<div class="max-w-3xl mx-auto">
				<h2 class="text-3xl font-bold mb-16 tracking-tight">ABOUT</h2>

				<div class="mb-16 flex items-start">
					<div
						:class="[
							darkMode ? 'bg-white' : 'bg-black',
							'w-24 h-1 mt-3 mr-8 transition-colors duration-500',
						]"
					></div>
					<div>
						<p class="text-xl mb-6">
							I'm a software developer specializing in frontend technologies, and experience with
							building APIs and Component libraries. Programming has been my hobby for a long time,
							so there are always a few things going on the side. Nowadays, I'm tinkering with go
							and rust, also building a few IoT projects.
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<h3 class="text-xl font-medium mb-4">SKILLS</h3>
						<ul class="space-y-2">
							<li class="flex items-center">
								<div
									:class="[
										darkMode ? 'bg-white' : 'bg-black',
										'w-2 h-2 mr-3 transition-colors duration-500',
									]"
								></div>
								<span>Frontend Architecture & Development</span>
							</li>
							<li class="flex items-center">
								<div
									:class="[
										darkMode ? 'bg-white' : 'bg-black',
										'w-2 h-2 mr-3 transition-colors duration-500',
									]"
								></div>
								<span>RESTful API Integration</span>
							</li>
							<li class="flex items-center">
								<div
									:class="[
										darkMode ? 'bg-white' : 'bg-black',
										'w-2 h-2 mr-3 transition-colors duration-500',
									]"
								></div>
								<span>Responsive & Accessible Web Design</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 class="text-xl font-medium mb-4">TOOLS & TECHNOLOGIES</h3>
						<ul class="space-y-2">
							<li class="flex items-center">
								<div
									:class="[
										darkMode ? 'bg-white' : 'bg-black',
										'w-2 h-2 mr-3 transition-colors duration-500',
									]"
								></div>
								<span>Vue.js / Svelte / React</span>
							</li>
							<li class="flex items-center">
								<div
									:class="[
										darkMode ? 'bg-white' : 'bg-black',
										'w-2 h-2 mr-3 transition-colors duration-500',
									]"
								></div>
								<span>TypeScript / JavaScript</span>
							</li>

							<li class="flex items-center">
								<div
									:class="[
										darkMode ? 'bg-white' : 'bg-black',
										'w-2 h-2 mr-3 transition-colors duration-500',
									]"
								></div>
								<span>Tailwind CSS / SCSS</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section
		id="contact"
		:class="[darkMode ? 'bg-black' : 'bg-black', 'py-32 text-white transition-colors duration-500']"
	>
		<div class="container mx-auto px-6">
			<div class="max-w-3xl mx-auto">
				<h2 class="text-3xl font-bold mb-16 tracking-tight">CONTACT</h2>
				<div class="flex space-x-6">
					<a href="https://github.com/mrksbnc" class="hover:text-gray-400 transition-colors">
						GITHUB
					</a>
					<a href="https://linkedin.com/in/mrksbnc/" class="hover:text-gray-400 transition-colors">
						LINKEDIN
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
	darkMode: boolean;
}>();

const tileOpacity = ref(Array.from({ length: 64 }, () => Math.random() * 0.5 + 0.5));

function animateTiles() {
	for (let i = 0; i < tileOpacity.value.length; i++) {
		setTimeout(() => {
			tileOpacity.value[i] = Math.random() * 0.5 + 0.5;
		}, i * 20);
	}
}

onMounted(() => {
	animateTiles();
});
</script>
