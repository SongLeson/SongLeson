<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const cursor = ref<HTMLElement | null>(null)
const follower = ref<HTMLElement | null>(null)

const moveCursor = (e: MouseEvent) => {
  gsap.to(cursor.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power2.out'
  })
  gsap.to(follower.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: 'power2.out'
  })
}

const onHover = () => {
  gsap.to(cursor.value, { scale: 0.5, duration: 0.3 })
  gsap.to(follower.value, { scale: 2, opacity: 0.5, duration: 0.3 })
}

const onLeave = () => {
  gsap.to(cursor.value, { scale: 1, duration: 0.3 })
  gsap.to(follower.value, { scale: 1, opacity: 1, duration: 0.3 })
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
  
  // Add hover listeners to interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .interactive')
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', onHover)
    el.addEventListener('mouseleave', onLeave)
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<template>
  <div ref="cursor" class="custom-cursor main-cursor"></div>
  <div ref="follower" class="custom-cursor follower-cursor"></div>
</template>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

.main-cursor {
  background-color: white;
  width: 10px;
  height: 10px;
}

.follower-cursor {
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 40px;
  height: 40px;
  transition: width 0.3s, height 0.3s;
}
</style>
