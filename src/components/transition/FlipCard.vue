<template>
  <div
    class="vm-flip-card"
    :class="{ 'vm-flip-card--flipped': isFlipped }"
    :style="{
      '--vm-flip-perspective': `${perspective}px`,
      '--vm-flip-duration': `${duration}ms`,
    } as any"
    @click="toggleFlip"
  >
    <div class="vm-flip-card__inner" :class="`vm-flip-card__inner--${direction}`">
      <div class="vm-flip-card__front">
        <slot name="front" />
      </div>
      <div class="vm-flip-card__back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FlipDirection } from '../../types'

export interface FlipCardProps {
  direction?: FlipDirection
  duration?: number
  perspective?: number
}

const props = withDefaults(defineProps<FlipCardProps>(), {
  direction: 'horizontal',
  duration: 600,
  perspective: 1000,
})

const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

defineExpose({ flip: () => { isFlipped.value = true }, unflip: () => { isFlipped.value = false } })
</script>

<style scoped>
.vm-flip-card {
  display: inline-block;
  perspective: var(--vm-flip-perspective, 1000px);
  cursor: pointer;
}

.vm-flip-card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--vm-flip-duration, 600ms);
  transform-style: preserve-3d;
}

.vm-flip-card__inner--horizontal {
  transform-origin: center center;
}

.vm-flip-card--flipped .vm-flip-card__inner--horizontal {
  transform: rotateY(180deg);
}

.vm-flip-card__inner--vertical {
  transform-origin: center center;
}

.vm-flip-card--flipped .vm-flip-card__inner--vertical {
  transform: rotateX(180deg);
}

.vm-flip-card__front,
.vm-flip-card__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.vm-flip-card__back {
  transform: rotateY(180deg);
}

.vm-flip-card__inner--vertical .vm-flip-card__back {
  transform: rotateX(180deg);
}
</style>
