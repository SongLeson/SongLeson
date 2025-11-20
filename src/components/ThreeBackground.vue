<script setup lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { OrbitControls } from '@tresjs/cientos'
import TheParticles from './TheParticles.vue'
</script>

<template>
  <div class="canvas-container">
    <TresCanvas
      clear-color="#000000"
      shadows
      alpha
      :gl="{
        shadowMapType: BasicShadowMap,
        outputColorSpace: SRGBColorSpace,
        toneMapping: NoToneMapping,
      }"
    >
      <TresPerspectiveCamera :position="[0, 0, 10]" :fov="75" />
      <OrbitControls :enable-zoom="false" :enable-pan="false" :enable-rotate="false" />
      
      <TheParticles />

      <TresAmbientLight :intensity="0.5" />
    </TresCanvas>
    <div class="noise-overlay"></div>
  </div>
</template>

<style scoped>
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

.noise-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  mix-blend-mode: overlay;
}
</style>
