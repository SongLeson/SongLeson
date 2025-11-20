<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['loaded'])
const terminalLines = ref<string[]>([])
const show = ref(true)

const lines = [
  'INITIALIZING SYSTEM...',
  'LOADING ASSETS...',
  'CONNECTING TO NEURAL NET...',
  'DECRYPTING DATA...',
  'ACCESS GRANTED.'
]

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to('.preloader', {
        scaleY: 0.002,
        duration: 0.2,
        delay: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to('.preloader', {
            width: 0,
            duration: 0.2,
            ease: 'power2.inOut',
            onComplete: () => {
              show.value = false
              emit('loaded')
            }
          })
        }
      })
    }
  })

  lines.forEach((line, index) => {
    tl.to({}, {
      duration: 0.3,
      onStart: () => {
        terminalLines.value.push(line)
      }
    })
  })
})
</script>

<template>
  <div v-if="show" class="preloader">
    <div class="terminal">
      <div v-for="(line, index) in terminalLines" :key="index" class="line">
        <span class="prompt">></span> {{ line }}
      </div>
      <div class="cursor-blink">_</div>
    </div>
    <div class="scanline"></div>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  color: #ccff00;
  overflow: hidden;
}

.terminal {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
}

.line {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #ccff00;
}

.prompt {
  margin-right: 1rem;
  color: #8b5cf6;
}

.cursor-blink {
  animation: blink 1s infinite;
  display: inline-block;
  color: #ccff00;
  text-shadow: 0 0 5px #ccff00;
}

.scanline {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.2)
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: scanline 10s linear infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scanline {
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
}
</style>
