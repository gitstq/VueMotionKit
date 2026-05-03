<template>
  <div
    ref="cardRef"
    class="vm-spotlight-card"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="vm-spotlight-card__spotlight"
      :style="{
        background: `radial-gradient(${spotlightSize}px circle at ${spotlightX}px ${spotlightY}px, ${spotlightColor}, transparent 60%)`,
        opacity: isHovering ? 1 : 0,
      }"
    />
    <div
      v-if="borderGlow"
      class="vm-spotlight-card__border"
      :style="{
        background: `radial-gradient(${spotlightSize * 1.5}px circle at ${spotlightX}px ${spotlightY}px, ${spotlightColor}, transparent 40%)`,
        opacity: isHovering ? 0.5 : 0,
      }"
    />
    <div class="vm-spotlight-card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface SpotlightCardProps {
  spotlightColor?: string
  spotlightSize?: number
  borderGlow?: boolean
}

const props = withDefaults(defineProps<SpotlightCardProps>(), {
  spotlightColor: 'rgba(99, 102, 241, 0.15)',
  spotlightSize: 200,
  borderGlow: true,
})

const { prefersReducedMotion } = useReducedMotion()
const cardRef = ref<HTMLElement | null>(null)
const spotlightX = ref(0)
const spotlightY = ref(0)
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (prefersReducedMotion.value) return
  const card = cardRef.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  spotlightX.value = e.clientX - rect.left
  spotlightY.value = e.clientY - rect.top
}

const handleMouseLeave = () => {
  isHovering.value = false
}
</script>

<style scoped>
.vm-spotlight-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.vm-spotlight-card__spotlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.vm-spotlight-card__border {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 0;
  border-radius: inherit;
}

.vm-spotlight-card__content {
  position: relative;
  z-index: 2;
  border-radius: inherit;
}
</style>
