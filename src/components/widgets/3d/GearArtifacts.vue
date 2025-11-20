<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import { type Group } from 'three'

defineProps<{
  activeItem: string
}>()

const gearRef = shallowRef<Group | null>(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (gearRef.value) {
    gearRef.value.rotation.y = elapsed * 0.3
    gearRef.value.rotation.z = Math.sin(elapsed * 0.5) * 0.1
  }
})
</script>

<template>
  <TresGroup ref="gearRef">
    <TresMesh v-if="activeItem === 'PC_RIG'">
      <TresBoxGeometry :args="[1.5, 2, 0.8]" />
      <TresMeshNormalMaterial wireframe />
    </TresMesh>
    
    <TresMesh v-else>
       <TresBoxGeometry :args="[2.5, 1.5, 0.1]" />
       <TresMeshNormalMaterial wireframe />
    </TresMesh>
  </TresGroup>
</template>
