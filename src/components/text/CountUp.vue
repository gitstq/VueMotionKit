<template>
  <span ref="elRef" class="vm-count-up" :style="{ color: color || undefined }">
    {{ formattedValue }}
  </span>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { TriggerMode } from '../../types'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { easeOutCubic } from '../../utils'

export interface CountUpProps {
  from?: number
  to: number
  duration?: number
  decimals?: number
  separator?: string
  prefix?: string
  suffix?: string
  trigger?: TriggerMode
  color?: string
}

const props = withDefaults(defineProps<CountUpProps>(), {
  from: 0,
  duration: 2000,
  decimals: 0,
  separator: ',',
  prefix: '',
  suffix: '',
  trigger: 'mount',
  color: '',
})

const elRef = ref<HTMLElement | null>(null)
const { prefersReducedMotion } = useReducedMotion()
const { isVisible } = useIntersectionObserver(elRef, {
  threshold: 0.1,
  once: true,
})

const currentValue = ref(props.from)
let animationFrame: number | null = null
let startTime: number | null = null

const formatNumber = (value: number): string => {
  const fixed = value.toFixed(props.decimals)
  if (!props.separator) return `${props.prefix}${fixed}${props.suffix}`

  const [intPart, decPart] = fixed.split('.')
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, props.separator)
  const result = decPart ? `${formatted}.${decPart}` : formatted
  return `${props.prefix}${result}${props.suffix}`
}

const formattedValue = computed(() => formatNumber(currentValue.value))

const animate = (timestamp: number) => {
  if (startTime === null) startTime = timestamp
  const elapsed = timestamp - startTime
  const progress = Math.min(elapsed / props.duration, 1)
  const easedProgress = prefersReducedMotion.value ? 1 : easeOutCubic(progress)

  currentValue.value = props.from + (props.to - props.from) * easedProgress

  if (progress < 1) {
    animationFrame = requestAnimationFrame(animate)
  }
}

const startAnimation = () => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  startTime = null
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  if (props.trigger === 'mount') {
    startAnimation()
  }
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})

watch(isVisible, (visible) => {
  if (visible && props.trigger === 'scroll') {
    startAnimation()
  }
})

watch(
  () => props.to,
  () => {
    startAnimation()
  }
)
</script>

<style scoped>
.vm-count-up {
  display: inline-block;
  font-variant-numeric: tabular-nums;
}
</style>
