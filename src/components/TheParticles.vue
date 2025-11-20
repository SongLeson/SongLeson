<script setup lang="ts">
import { shallowRef } from 'vue'
import { useLoop } from '@tresjs/core'
import type { Points } from 'three'

const particles = shallowRef<Points | null>(null)
const count = 2000
const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)

// Initialize particles
for (let i = 0; i < count; i++) {
  const i3 = i * 3
  positions[i3] = (Math.random() - 0.5) * 20
  positions[i3 + 1] = (Math.random() - 0.5) * 20
  positions[i3 + 2] = (Math.random() - 0.5) * 20

  // Neon colors
  const colorType = Math.random()
  if (colorType < 0.33) { // Neon Lime
    colors[i3] = 0.8
    colors[i3 + 1] = 1.0
    colors[i3 + 2] = 0.0
  } else if (colorType < 0.66) { // Electric Violet
    colors[i3] = 0.5
    colors[i3 + 1] = 0.3
    colors[i3 + 2] = 1.0
  } else { // Holographic Blue
    colors[i3] = 0.0
    colors[i3 + 1] = 0.8
    colors[i3 + 2] = 1.0
  }
}

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (particles.value) {
    particles.value.rotation.y = elapsed * 0.1
    particles.value.rotation.x = elapsed * 0.05
  }
})
</script>

<template>
  <TresPoints ref="particles">
    <TresBufferGeometry
      :position="[positions, 3]"
      :color="[colors, 3]"
    />
    <TresPointsMaterial
      :size="0.05"
      :vertex-colors="true"
      :size-attenuation="true"
      :transparent="true"
      :opacity="0.8"
      :blending="2" 
    />
  </TresPoints>
</template>
