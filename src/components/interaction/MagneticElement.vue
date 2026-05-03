<template>
  <div
    ref="containerRef"
    class="vm-magnetic-element"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="elRef"
      class="vm-magnetic-element__inner"
      :style="{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        transition: isHovering
          ? `transform ${duration}ms ${easing}`
          : `transform ${duration * 1.5}ms ${easing}`,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { clamp } from '../../utils'

export interface MagneticElementProps {
  strength?: number
  radius?: number
  duration?: number
  easing?: string
}

const props = withDefaults(defineProps<MagneticElementProps>(), {
  strength: 0.3,
  radius: 200,
  duration: 300,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
})

const { prefersReducedMotion } = useReducedMotion()
const containerRef = ref<HTMLElement | null>(null)
const elRef = ref<HTMLElement | null>(null)
const offsetX = ref(0)
const offsetY = ref(0)
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (prefersReducedMotion.value) return
  const container = containerRef.value
  if (!container) return

  const rect = container.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const distX = e.clientX - centerX
  const distY = e.clientY - centerY
  const distance = Math.sqrt(distX * distX + distY * distY)

  if (distance < props.radius) {
    isHovering.value = true
    offsetX.value = clamp(distX * props.strength, -props.radius, props.radius)
    offsetY.value = clamp(distY * props.strength, -props.radius, props.radius)
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<style scoped>
.vm-magnetic-element {
  display: inline-block;
}

.vm-magnetic-element__inner {
  display: inline-block;
  will-change: transform;
}
</style>
