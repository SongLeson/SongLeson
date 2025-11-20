<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { TextScramble } from '../utils/TextScramble' // We will create this helper

const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (titleRef.value) {
    const fx = new TextScramble(titleRef.value)
    fx.setText('SONG LISHEN').then(() => {
      // Animation complete
    })
  }
  
  gsap.from(subtitleRef.value, {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.5,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section class="min-h-screen flex flex-col justify-center items-start relative z-10 pointer-events-none">
    <div class="container mx-auto px-4 pointer-events-auto">
      <h1 ref="titleRef" class="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 mb-6 tracking-tighter glitch-text">
        SONG LISHEN
      </h1>
      <p ref="subtitleRef" class="text-xl md:text-2xl text-electric-violet font-mono">
        > CREATIVE_DEVELOPER // VUE_MASTER
      </p>
    </div>
  </section>
</template>

<style scoped>
.glitch-text {
  position: relative;
}
</style>
