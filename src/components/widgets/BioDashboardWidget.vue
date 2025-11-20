<script setup lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { OrbitControls } from '@tresjs/cientos'
import BioBody from './3d/BioBody.vue'
</script>

<template>
  <div class="widget bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass transition-all duration-300 hover:border-white/20 hover:shadow-neon hover:-translate-y-1 h-full flex flex-col relative overflow-hidden group">
    
    <!-- Header -->
    <div class="absolute top-4 left-4 z-10">
      <div class="text-xs font-mono text-neon-lime mb-1">BIO_DASHBOARD</div>
      <div class="text-xs text-white/50">STATUS: ONLINE</div>
    </div>

    <!-- 3D Body Wireframe -->
    <div class="flex-1 w-full h-full absolute inset-0">
      <TresCanvas
        clear-color="#000000"
        alpha
        :gl="{
          shadowMapType: BasicShadowMap,
          outputColorSpace: SRGBColorSpace,
          toneMapping: NoToneMapping,
        }"
      >
        <TresPerspectiveCamera :position="[0, 0, 5]" :fov="50" />
        <OrbitControls :enable-zoom="false" :enable-pan="false" :enable-rotate="true" />
        
        <BioBody />

        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>

    <!-- Stats Overlay -->
    <div class="absolute bottom-4 left-4 right-4 z-10 grid grid-cols-2 gap-2 text-xs font-mono">
      <div class="bg-black/50 p-2 rounded border border-white/10">
        <div class="text-white/50">HEIGHT</div>
        <div class="text-white">186 CM</div>
      </div>
      <div class="bg-black/50 p-2 rounded border border-white/10">
        <div class="text-white/50">WEIGHT</div>
        <div class="text-white">81 KG</div>
      </div>
      <div class="col-span-2 bg-black/50 p-2 rounded border border-white/10">
        <div class="text-white/50">BUFFS</div>
        <div class="text-neon-lime">FISH_OIL // VIT_D3</div>
      </div>
    </div>

  </div>
</template>
