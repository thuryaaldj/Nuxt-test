<template>
  <nav class="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
    <!-- Logo: نجمة رباعية -->
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
      </svg>
 
    </div>

    <!-- Navigation Links (Desktop) -->
    <ul class="hidden md:flex gap-8 text-sm font-medium">
      <li><a href="/components/landing/Workflow.vue" class="hover:text-gray-300 transition">Workflow</a></li>
      <li><a href="/components/landing/Visualinfo.vue" class="hover:text-gray-300 transition">Visualise</a></li>
      <li><a href="/components/landing/FeaturesSection.vue" class="hover:text-gray-300 transition">Info</a></li>
      <li><a href="/components/landing/Team.vue" class="hover:text-gray-300 transition">Introducing Team</a></li>
      <li><a href="/components/landing/templates.vue" class="hover:text-gray-300 transition">Templates</a></li>
    </ul>

    <!-- Join Beta Button -->
    <button
      class="hidden md:inline ml-6 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
    >
      Join Beta
    </button>


    <button @click="open = !open" class="md:hidden p-2 rounded-md">
      <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    
    <transition name="fade-slide">
      <div v-if="open" class="absolute top-full left-0 w-full bg-black/95 text-white md:hidden z-50">
        <ul class="flex flex-col gap-3 px-6 py-4">
          <li><a @click="open=false" href="#workflow" class="py-2">Workflow</a></li>
          <li><a @click="open=false" href="#visualise" class="py-2">Visualise</a></li>
          <li><a @click="open=false" href="#info" class="py-2">Info</a></li>
          <li><a @click="open=false" href="#team" class="py-2">Introducing Team</a></li>
          <li><a @click="open=false" href="#templates" class="py-2">Templates</a></li>
          <li>
            <button @click="open=false" class="w-full mt-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200">
              Join Beta
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.fade-slide-enter-from { transform: translateY(-6px); opacity: 0; }
.fade-slide-enter-active { transition: all .22s ease; }
.fade-slide-enter-to { transform: translateY(0); opacity: 1; }
.fade-slide-leave-from { transform: translateY(0); opacity: 1; }
.fade-slide-leave-active { transition: all .18s ease; }
.fade-slide-leave-to { transform: translateY(-6px); opacity: 0; }
</style>
