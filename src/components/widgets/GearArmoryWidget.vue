<script setup lang="ts">
import { ref } from 'vue'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import { OrbitControls } from '@tresjs/cientos'
import GearArtifacts from './3d/GearArtifacts.vue'

const activeItem = ref('PC_RIG')

const toggleItem = () => {
  activeItem.value = activeItem.value === 'PC_RIG' ? 'MONITOR' : 'PC_RIG'
}
</script>

<template>
  <div class="widget bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-glass transition-all duration-300 hover:border-white/20 hover:shadow-neon hover:-translate-y-1 h-full flex flex-col relative overflow-hidden group" @click="toggleItem">
    
    <!-- Header -->
    <div class="absolute top-4 left-4 z-10 pointer-events-none">
      <div class="text-xs font-mono text-electric-violet mb-1">GEAR_ARMORY</div>
      <div class="text-xs text-white/50">CLICK_TO_SWAP</div>
    </div>

    <!-- 3D Artifacts -->
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
        
        <GearArtifacts :active-item="activeItem" />

        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>

    <!-- Specs Overlay -->
    <div class="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
      <div v-if="activeItem === 'PC_RIG'" class="bg-black/50 p-3 rounded border border-white/10 backdrop-blur-md">
        <div class="text-xs text-neon-lime font-bold mb-1">MAIN_RIG</div>
        <div class="text-[10px] text-white/70 font-mono space-y-1">
          <div>CPU: RYZEN 9 7950X</div>
          <div>GPU: RTX 4090</div>
          <div>RAM: 64GB DDR5</div>
        </div>
      </div>
      <div v-else class="bg-black/50 p-3 rounded border border-white/10 backdrop-blur-md">
        <div class="text-xs text-electric-violet font-bold mb-1">VISUAL_INTERFACE</div>
        <div class="text-[10px] text-white/70 font-mono space-y-1">
          <div>MODEL: LG 27GN950</div>
          <div>RES: 4K UHD</div>
          <div>REFRESH: 144HZ</div>
        </div>
      </div>
    </div>

  </div>
</template>
