<template>
  <div
    class="vm-morphing-card"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div
      class="vm-morphing-card__inner"
      :style="{
        borderRadius: isHovering ? hoverBorderRadius : `${borderRadius}px`,
        transform: isHovering
          ? `scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : 'scale(1) rotateX(0) rotateY(0)',
        boxShadow: isHovering
          ? `0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(99, 102, 241, 0.1)`
          : shadow || '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface MorphingCardProps {
  borderRadius?: number
  scale?: number
  shadow?: string
  rotateX?: number
  rotateY?: number
  duration?: number
}

const props = withDefaults(defineProps<MorphingCardProps>(), {
  borderRadius: 12,
  scale: 1.02,
  shadow: '',
  rotateX: 2,
  rotateY: 2,
  duration: 400,
})

const { prefersReducedMotion } = useReducedMotion()
const isHovering = ref(false)

const hoverBorderRadius = computed(() => {
  return `${props.borderRadius + 8}px`
})
</script>

<style scoped>
.vm-morphing-card {
  display: inline-block;
  perspective: 1000px;
}

.vm-morphing-card__inner {
  transform-style: preserve-3d;
  will-change: transform, border-radius, box-shadow;
  overflow: hidden;
}
</style>
