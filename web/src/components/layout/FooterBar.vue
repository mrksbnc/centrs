<template>
  <footer :class="isDark ? 'bg-gray-800' : 'bg-white'" class="py-6 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-between items-center">
        <div class="flex items-center mb-4 md:mb-0">
          <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="isDark ? 'text-blue-400' : 'text-blue-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">
            © {{ new Date().getFullYear() }} Age Like Milk - Test your AI detection skills
          </p>
        </div>

        <div class="flex space-x-6">
          <a href="#" :class="isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'">
            <span class="sr-only">About</span>
            <span class="text-sm">About</span>
          </a>
          <a href="#" :class="isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'">
            <span class="sr-only">Privacy</span>
            <span class="text-sm">Privacy</span>
          </a>
          <a href="#" :class="isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'">
            <span class="sr-only">Terms</span>
            <span class="text-sm">Terms</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Props
interface Props {
  isDark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDark: false
});
</script> 