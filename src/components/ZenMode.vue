<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const isZen = ref(false)
const idleTime = ref(0)
const IDLE_THRESHOLD = 60 // 60 seconds
let idleInterval: number | null = null

const resetIdle = () => {
  idleTime.value = 0
  if (isZen.value) {
    exitZen()
  }
}

const checkIdle = () => {
  idleTime.value++
  if (idleTime.value >= IDLE_THRESHOLD && !isZen.value) {
    enterZen()
  }
}

const enterZen = () => {
  isZen.value = true
  gsap.to('.zen-overlay', { opacity: 1, duration: 2, ease: 'power2.inOut' })
}

const exitZen = () => {
  gsap.to('.zen-overlay', { 
    opacity: 0, 
    duration: 1, 
    onComplete: () => {
      isZen.value = false
    }
  })
}

onMounted(() => {
  idleInterval = window.setInterval(checkIdle, 1000)
  window.addEventListener('mousemove', resetIdle)
  window.addEventListener('keydown', resetIdle)
  window.addEventListener('click', resetIdle)
})

onUnmounted(() => {
  if (idleInterval) clearInterval(idleInterval)
  window.removeEventListener('mousemove', resetIdle)
  window.removeEventListener('keydown', resetIdle)
  window.removeEventListener('click', resetIdle)
})

// Wooden Fish Logic
const merit = ref(0)
const bugs = ref(999)
const floatingTexts = ref<{ id: number, text: string, x: number, y: number }[]>([])
let textId = 0

const tapFish = (e: MouseEvent) => {
  e.stopPropagation() // Prevent exiting Zen Mode immediately
  merit.value++
  bugs.value--
  
  // Animate Fish
  gsap.to('.wooden-fish', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
  
  // Floating Text
  const rect = (e.target as HTMLElement).getBoundingClientRect()
  const x = e.clientX - rect.left + (Math.random() * 40 - 20)
  const y = e.clientY - rect.top
  
  const id = textId++
  floatingTexts.value.push({ id, text: 'BUGS -1  WEALTH +1', x, y })
  
  setTimeout(() => {
    floatingTexts.value = floatingTexts.value.filter(t => t.id !== id)
  }, 1000)
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isZen" class="zen-overlay fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center opacity-0">
      
      <div class="text-neon-lime font-mono text-xl mb-8 tracking-widest">ZEN_MODE_ACTIVATED</div>
      
      <div class="wooden-fish cursor-pointer relative" @click="tapFish">
        <!-- Simple SVG Wooden Fish -->
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 C10 20 40 10 70 30 C90 45 90 55 70 70 C40 90 10 80 10 50 Z" stroke="#ccff00" stroke-width="2" fill="rgba(204, 255, 0, 0.1)"/>
          <circle cx="70" cy="40" r="5" fill="#ccff00"/>
          <path d="M30 50 L50 50" stroke="#ccff00" stroke-width="2"/>
        </svg>
        
        <!-- Floating Texts -->
        <div v-for="text in floatingTexts" :key="text.id" 
             class="absolute text-xs font-mono text-electric-violet pointer-events-none animate-float-up"
             :style="{ left: text.x + 'px', top: text.y + 'px' }">
          {{ text.text }}
        </div>
      </div>

      <div class="mt-12 text-white/50 font-mono text-sm text-center">
        <div>MERIT: {{ merit }}</div>
        <div>BUGS_REMAINING: {{ bugs }}</div>
      </div>
      
      <div class="absolute bottom-8 text-white/30 text-xs">MOVE_MOUSE_TO_WAKE</div>
      
    </div>
  </Teleport>
</template>

<style scoped>
.animate-float-up {
  animation: floatUp 1s ease-out forwards;
}

@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-50px); opacity: 0; }
}
</style>
