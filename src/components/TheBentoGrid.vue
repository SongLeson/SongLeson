<script setup lang="ts">
import WeatherWidget from './widgets/WeatherWidget.vue'
import MusicWidget from './widgets/MusicWidget.vue'
import TechSphereWidget from './widgets/TechSphereWidget.vue'
import GithubCityWidget from './widgets/GithubCityWidget.vue'
import MapWidget from './widgets/MapWidget.vue'
import BioDashboardWidget from './widgets/BioDashboardWidget.vue'
import GearArmoryWidget from './widgets/GearArmoryWidget.vue'
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

        <!-- Bio Dashboard (1x2) -->
        <div class="col-span-1 row-span-2">
          <BioDashboardWidget />
        </div>

        <!-- Gear Armory (1x2) -->
        <div class="col-span-1 row-span-2">
          <GearArmoryWidget />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Utility classes moved to template for Tailwind v4 compatibility */
</style>
