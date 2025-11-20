<script setup lang="ts">
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { OrbitControls } from '@tresjs/cientos'
import MapGlobe from './3d/MapGlobe.vue'
</script>

<template>
  <div class="widget bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass transition-all duration-300 hover:border-white/20 hover:shadow-neon hover:-translate-y-1 h-full flex flex-col relative overflow-hidden group">
    
    <!-- Header -->
    <div class="absolute top-4 left-4 z-10 pointer-events-none">
      <div class="text-xs font-mono text-holographic-blue mb-1">TRAJECTORY_MAP</div>
      <div class="text-xs text-white/50">MISSION: RESOURCE_GATHERING</div>
    </div>

    <!-- Progress Bar -->
    <div class="absolute top-4 right-4 z-10 w-32 pointer-events-none">
      <div class="flex justify-between text-[10px] text-white/50 mb-1 font-mono">
        <span>PROGRESS</span>
        <span>300K TARGET</span>
      </div>
      <div class="h-1 bg-white/10 rounded-full overflow-hidden">
        <div class="h-full bg-neon-lime w-[45%]"></div>
      </div>
    </div>

    <!-- 3D Globe -->
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
        <TresPerspectiveCamera :position="[0, 0, 6]" :fov="45" />
        <OrbitControls :enable-zoom="false" :enable-pan="false" :enable-rotate="true" />
        
        <MapGlobe />

        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>

    <!-- Legend -->
    <div class="absolute bottom-4 left-4 z-10 flex gap-4 text-[10px] font-mono pointer-events-none">
      <div class="flex items-center gap-1">
        <div class="w-2 h-2 rounded-full bg-electric-violet"></div>
        <span class="text-white/50">EXP_GAINED</span>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-2 h-2 rounded-full bg-neon-lime"></div>
        <span class="text-white/50">CURRENT</span>
      </div>
       <div class="flex items-center gap-1">
        <div class="w-2 h-2 rounded-full bg-holographic-blue"></div>
        <span class="text-white/50">TARGET</span>
      </div>
    </div>

  </div>
</template>
