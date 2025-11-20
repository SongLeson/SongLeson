<template>
  <div class="widget glass-panel h-full flex flex-col justify-end p-6 relative overflow-hidden">
    <div class="text-xs font-mono text-white/50 absolute top-4 left-4">CONTRIBUTIONS</div>
    <div class="flex items-end gap-1 h-20 w-full">
      <div v-for="i in 20" :key="i" 
           class="flex-1 bg-neon-lime/50 hover:bg-neon-lime transition-colors rounded-t-sm"
           :style="{ height: `${Math.random() * 100}%` }">
      </div>
    </div>
  </div>
</template>
