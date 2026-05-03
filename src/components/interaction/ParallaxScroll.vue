<template>
  <div
    ref="containerRef"
    class="vm-parallax-scroll"
    :class="{ 'vm-parallax-scroll--overflow': overflow }"
  >
    <div
      class="vm-parallax-scroll__inner"
      :style="{
        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        willChange: 'transform',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface ParallaxScrollProps {
  speed?: number
  direction?: 'vertical' | 'horizontal'
  overflow?: boolean
}

const props = withDefaults(defineProps<ParallaxScrollProps>(), {
  speed: 0.5,
  direction: 'vertical',
  overflow: false,
})

const { prefersReducedMotion } = useReducedMotion()
const containerRef = ref<HTMLElement | null>(null)
const translateY = ref(0)
const translateX = ref(0)

const handleScroll = () => {
  if (prefersReducedMotion.value) return
  const container = containerRef.value
  if (!container) return

  const rect = container.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const elementCenter = rect.top + rect.height / 2
  const windowCenter = windowHeight / 2
  const offset = (elementCenter - windowCenter) * props.speed

  if (props.direction === 'vertical') {
    translateY.value = offset
    translateX.value = 0
  } else {
    translateX.value = offset
    translateY.value = 0
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.vm-parallax-scroll {
  position: relative;
  overflow: hidden;
}

.vm-parallax-scroll--overflow {
  overflow: visible;
}

.vm-parallax-scroll__inner {
  transition: transform 0.1s linear;
}
</style>
