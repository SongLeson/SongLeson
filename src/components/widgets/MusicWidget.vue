<template>
  <div class="widget glass-panel h-full flex items-center p-6 gap-4 relative overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-r from-electric-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
      <ph-music-notes :size="32" weight="duotone" class="text-electric-violet" />
    </div>
    <div class="flex-1 min-w-0 z-10">
      <div class="text-sm font-bold truncate text-white">Cyberpunk 2077 OST</div>
      <div class="text-xs text-white/60 truncate">P.T. Adamczyk</div>
      
      <!-- Audio Visualizer -->
      <div class="flex items-end gap-1 h-8 mt-3">
        <div v-for="i in 12" :key="i" 
             class="w-1 bg-neon-lime rounded-full animate-music-bar"
             :style="{ 
               height: '20%', 
               animationDelay: `${Math.random() * 0.5}s`,
               animationDuration: `${0.5 + Math.random() * 0.5}s`
             }">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhMusicNotes } from '@phosphor-icons/vue'
</script>

<style scoped>
.animate-music-bar {
  animation: music-bar 1s ease-in-out infinite alternate;
}

@keyframes music-bar {
  0% { height: 20%; opacity: 0.5; }
  100% { height: 100%; opacity: 1; }
}
</style>
