<script setup lang="ts">
import WeatherWidget from './widgets/WeatherWidget.vue'
import MusicWidget from './widgets/MusicWidget.vue'
import TechSphereWidget from './widgets/TechSphereWidget.vue'
import GithubCityWidget from './widgets/GithubCityWidget.vue'
import MapWidget from './widgets/MapWidget.vue'
</script>

<template>
  <section class="py-20 relative z-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        
        <!-- Weather Widget (1x1) -->
        <div class="col-span-1 row-span-1">
          <WeatherWidget />
        </div>

        <!-- Music Widget (2x1) -->
        <div class="col-span-1 md:col-span-2 row-span-1">
          <MusicWidget />
        </div>

        <!-- Tech Sphere (1x2) -->
        <div class="col-span-1 row-span-2">
          <TechSphereWidget />
        </div>

        <!-- Github City (2x1) -->
        <div class="col-span-1 md:col-span-2 row-span-1">
          <GithubCityWidget />
        </div>

        <!-- Map Widget (2x2) -->
        <div class="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
          <MapWidget />
        </div>

        <!-- Placeholder for more content -->
        <div class="col-span-1 row-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass transition-all duration-300 hover:border-white/20 hover:shadow-neon hover:-translate-y-1 flex items-center justify-center">
          <span class="text-white/50 font-mono">MORE_COMING_SOON...</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Utility classes moved to template for Tailwind v4 compatibility */
</style>
