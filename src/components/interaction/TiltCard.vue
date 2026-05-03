<template>
  <div
    ref="cardRef"
    class="vm-tilt-card"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter"
  >
    <div
      class="vm-tilt-card__inner"
      :style="{
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${currentScale}, ${currentScale}, ${currentScale})`,
        transition: isHovering
          ? 'transform 0.1s ease-out'
          : `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }"
    >
      <slot />
      <div
        v-if="glare"
        class="vm-tilt-card__glare"
        :style="{
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 60%)`,
          opacity: isHovering ? 0.3 : 0,
          transition: 'opacity 0.3s ease',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface TiltCardProps {
  maxTilt?: number
  perspective?: number
  glare?: boolean
  glareColor?: string
  scale?: number
  duration?: number
}

const props = withDefaults(defineProps<TiltCardProps>(), {
  maxTilt: 15,
  perspective: 1000,
  glare: true,
  glareColor: 'rgba(255, 255, 255, 0.8)',
  scale: 1.02,
  duration: 400,
})

const { prefersReducedMotion } = useReducedMotion()
const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glareX = ref(50)
const glareY = ref(50)
const isHovering = ref(false)
const currentScale = ref(1)

const handleMouseMove = (e: MouseEvent) => {
  if (prefersReducedMotion.value) return
  const card = cardRef.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  rotateX.value = ((y - centerY) / centerY) * -props.maxTilt
  rotateY.value = ((x - centerX) / centerX) * props.maxTilt
  glareX.value = (x / rect.width) * 100
  glareY.value = (y / rect.height) * 100
}

const handleMouseEnter = () => {
  isHovering.value = true
  currentScale.value = props.scale
}

const handleMouseLeave = () => {
  isHovering.value = false
  rotateX.value = 0
  rotateY.value = 0
  currentScale.value = 1
}
</script>

<style scoped>
.vm-tilt-card {
  display: inline-block;
}

.vm-tilt-card__inner {
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  border-radius: inherit;
  overflow: hidden;
}

.vm-tilt-card__glare {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
}
</style>
