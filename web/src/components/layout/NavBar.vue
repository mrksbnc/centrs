<template>
  <nav :class="isDark ? 'bg-gray-800 shadow-gray-700/20' : 'bg-white shadow-sm'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <h1 :class="isDark ? 'text-white' : 'text-gray-900'" class="text-xl md:text-2xl font-bold">
              Age Like Milk
            </h1>
          </div>
          <div class="hidden md:flex md:space-x-8 md:ml-8">
            <router-link
              to="/"
              :class="[
                isActiveRoute('/') 
                  ? (isDark ? 'text-white' : 'text-gray-900') 
                  : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'),
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Home
            </router-link>
            <router-link
              to="/game"
              :class="[
                isActiveRoute('/game') 
                  ? (isDark ? 'text-white' : 'text-gray-900') 
                  : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'),
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Play
            </router-link>
            <router-link
              to="/stats"
              :class="[
                isActiveRoute('/stats') 
                  ? (isDark ? 'text-white' : 'text-gray-900') 
                  : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'),
                'px-3 py-2 rounded-md text-sm font-medium'
              ]"
            >
              Stats
            </router-link>
          </div>
        </div>
        
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button 
            @click="$emit('toggle-dark-mode')" 
            class="p-2 rounded-full focus:outline-none"
            :class="isDark ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'"
          >
            <svg 
              v-if="isDark" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5" 
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path 
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" 
              />
            </svg>
            <svg 
              v-else 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5" 
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          
          <!-- Mobile menu button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-md focus:outline-none"
            :class="isDark ? 'text-white' : 'text-gray-700'"
          >
            <svg 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                v-if="mobileMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden" :class="isDark ? 'bg-gray-800' : 'bg-white'">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          :class="[
            isActiveRoute('/') 
              ? (isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900') 
              : (isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'),
            'block px-3 py-2 rounded-md text-base font-medium'
          ]"
          @click="mobileMenuOpen = false"
        >
          Home
        </router-link>
        <router-link
          to="/game"
          :class="[
            isActiveRoute('/game') 
              ? (isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900') 
              : (isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'),
            'block px-3 py-2 rounded-md text-base font-medium'
          ]"
          @click="mobileMenuOpen = false"
        >
          Play
        </router-link>
        <router-link
          to="/stats"
          :class="[
            isActiveRoute('/stats') 
              ? (isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900') 
              : (isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'),
            'block px-3 py-2 rounded-md text-base font-medium'
          ]"
          @click="mobileMenuOpen = false"
        >
          Stats
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

// Props
interface Props {
  isDark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isDark: false
});

// Emits
defineEmits<{
  (e: 'toggle-dark-mode'): void;
}>();

// Route
const route = useRoute();

// State
const mobileMenuOpen = ref(false);

// Methods
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function isActiveRoute(path: string): boolean {
  return route.path === path;
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (mobileMenuOpen.value && !target.closest('nav')) {
    mobileMenuOpen.value = false;
  }
};

// Handle resize to close mobile menu on larger screens
const handleResize = () => {
  if (window.innerWidth >= 768 && mobileMenuOpen.value) {
    mobileMenuOpen.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
});
</script> 