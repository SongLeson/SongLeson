<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import { type Group } from 'three'

const globeRef = shallowRef<Group | null>(null)

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (globeRef.value) {
    globeRef.value.rotation.y = elapsed * 0.2
  }
})
</script>

<template>
  <TresGroup ref="globeRef">
    <!-- Globe Sphere -->
    <TresMesh>
      <TresSphereGeometry :args="[2, 32, 32]" />
      <TresMeshBasicMaterial color="#1a1a1a" wireframe />
    </TresMesh>
    
    <!-- Inner Globe (Solid) -->
    <TresMesh>
      <TresSphereGeometry :args="[1.95, 32, 32]" />
      <TresMeshBasicMaterial color="#000000" />
    </TresMesh>

    <!-- Markers (Simplified positions) -->
    <!-- Henan -->
    <TresMesh :position="[1.5, 1, 0.5]">
      <TresSphereGeometry :args="[0.05, 8, 8]" />
      <TresMeshBasicMaterial color="#8b5cf6" />
    </TresMesh>
     <!-- Shanghai -->
    <TresMesh :position="[1.6, 0.8, 0.8]">
      <TresSphereGeometry :args="[0.05, 8, 8]" />
      <TresMeshBasicMaterial color="#8b5cf6" />
    </TresMesh>
     <!-- Suzhou -->
    <TresMesh :position="[1.55, 0.85, 0.75]">
      <TresSphereGeometry :args="[0.08, 8, 8]" />
      <TresMeshBasicMaterial color="#ccff00" /> <!-- Current -->
    </TresMesh>
     <!-- Tokyo (Target) -->
    <TresMesh :position="[1.8, 0.9, 0.2]">
      <TresSphereGeometry :args="[0.05, 8, 8]" />
      <TresMeshBasicMaterial color="#00d4ff" /> <!-- Target -->
    </TresMesh>
    
    <!-- Connection Lines (Simplified Curve) -->
     <TresMesh :rotation-z="0.5" :rotation-y="0.5">
      <TresTorusGeometry :args="[2.05, 0.01, 16, 100, 1]" />
      <TresMeshBasicMaterial color="#ffffff" :transparent="true" :opacity="0.2" />
    </TresMesh>

  </TresGroup>
</template>
