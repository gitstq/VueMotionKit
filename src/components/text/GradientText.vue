<template>
  <span
    ref="elRef"
    class="vm-gradient-text"
    :style="{
      backgroundImage: gradientStyle,
      backgroundSize: '200% 200%',
      animationDuration: `${speed}s`,
      fontWeight,
      fontSize: fontSize || undefined,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animationName: 'vm-gradient-shift',
      animationTimingFunction: 'ease',
      animationIterationCount: 'infinite',
      display: 'inline-block',
    }"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GradientDirection } from '../../types'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface GradientTextProps {
  colors?: string[]
  speed?: number
  direction?: GradientDirection
  fontWeight?: string | number
  fontSize?: string
}

const props = withDefaults(defineProps<GradientTextProps>(), {
  colors: () => ['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e'],
  speed: 3,
  direction: 'horizontal',
  fontWeight: 'bold',
  fontSize: '',
})

const elRef = ref<HTMLElement | null>(null)
const { prefersReducedMotion } = useReducedMotion()

const gradientStyle = computed(() => {
  const colors = props.colors.join(', ')
  switch (props.direction) {
    case 'vertical':
      return `linear-gradient(to bottom, ${colors})`
    case 'diagonal':
      return `linear-gradient(135deg, ${colors})`
    default:
      return `linear-gradient(to right, ${colors})`
  }
})
</script>

<style scoped>
.vm-gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
