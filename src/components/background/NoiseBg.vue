<template>
  <div
    class="vm-noise-bg"
    :style="noiseStyle"
  >
    <svg class="vm-noise-bg__svg" xmlns="http://www.w3.org/2000/svg">
      <filter id="vm-noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#vm-noise-filter)" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface NoiseBgProps {
  opacity?: number
  blendMode?: string
}

const props = withDefaults(defineProps<NoiseBgProps>(), {
  opacity: 0.05,
  blendMode: 'overlay',
})

const noiseStyle = computed(() => ({
  opacity: props.opacity,
  mixBlendMode: props.blendMode as any,
}))
</script>

<style scoped>
.vm-noise-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.vm-noise-bg__svg {
  width: 100%;
  height: 100%;
}
</style>
