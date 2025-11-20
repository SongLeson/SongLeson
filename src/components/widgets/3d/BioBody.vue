<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import { type Group } from 'three'

const bodyRef = shallowRef<Group | null>(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (bodyRef.value) {
    bodyRef.value.rotation.y = elapsed * 0.5
  }
})
</script>

<template>
  <TresGroup ref="bodyRef" :position="[0, -1, 0]">
    <!-- Head -->
    <TresMesh :position="[0, 1.6, 0]">
      <TresIcosahedronGeometry :args="[0.4, 1]" />
      <TresMeshBasicMaterial color="#ccff00" wireframe />
    </TresMesh>
    
    <!-- Body -->
    <TresMesh :position="[0, 0.6, 0]">
      <TresCylinderGeometry :args="[0.3, 0.1, 1.5, 8]" />
      <TresMeshBasicMaterial color="#8b5cf6" wireframe />
    </TresMesh>

    <!-- Shoulders -->
     <TresMesh :position="[0, 1.2, 0]">
      <TresBoxGeometry :args="[1.2, 0.2, 0.4]" />
      <TresMeshBasicMaterial color="#00d4ff" wireframe />
    </TresMesh>
  </TresGroup>
</template>
