<script setup lang="ts">
import { ref } from 'vue'
import TheCursor from './components/TheCursor.vue'
import ThreeBackground from './components/ThreeBackground.vue'
import ThePreloader from './components/ThePreloader.vue'
import TheHero from './components/TheHero.vue'
import TheBentoGrid from './components/TheBentoGrid.vue'

const isLoaded = ref(false)

const onLoaded = () => {
  isLoaded.value = true
}
</script>

<template>
  <ThePreloader @loaded="onLoaded" />
  <TheCursor />
  <ThreeBackground />
  
  <main v-show="isLoaded" class="relative z-10 min-h-screen">
    <div class="container mx-auto px-4">
      <header class="fixed top-0 left-0 w-full flex justify-between items-center py-8 px-8 z-50 mix-blend-difference">
        <div class="text-2xl font-bold text-white tracking-tighter">
          SL<span class="text-neon-lime">.</span>
        </div>
        <nav class="hidden md:flex gap-8 text-white/70 font-mono text-sm">
          <a href="#" class="hover:text-neon-lime transition-colors">WORK</a>
          <a href="#" class="hover:text-neon-lime transition-colors">ABOUT</a>
          <a href="#" class="hover:text-neon-lime transition-colors">CONTACT</a>
        </nav>
      </header>

      <TheHero />
      <TheBentoGrid />
    </div>
  </main>
</template>

<style>
/* Global styles are in style.css */
</style>
