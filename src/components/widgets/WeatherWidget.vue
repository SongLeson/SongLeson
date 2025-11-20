<template>
  <div class="widget glass-panel h-full flex flex-col items-center justify-center p-4 relative overflow-hidden group">
    <!-- Rain Effect -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 20" :key="i" class="rain-drop" 
           :style="{ 
             left: `${Math.random() * 100}%`, 
             animationDelay: `${Math.random() * 2}s`,
             animationDuration: `${0.5 + Math.random() * 0.5}s`
           }">
      </div>
    </div>
    
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <ph-cloud-rain :size="48" weight="duotone" class="text-holographic-blue mb-2 relative z-10" />
    <div class="text-2xl font-bold relative z-10">24°C</div>
    <div class="text-xs text-white/60 font-mono relative z-10">SHANGHAI</div>
  </div>
</template>

<script setup lang="ts">
import { PhCloudRain } from '@phosphor-icons/vue'
</script>

<style scoped>
.rain-drop {
  position: absolute;
  top: -10px;
  width: 1px;
  height: 15px;
  background: rgba(255, 255, 255, 0.3);
  animation: rain linear infinite;
}

@keyframes rain {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(200px); opacity: 0; }
}
</style>
