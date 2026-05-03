<template>
  <component
    :is="tag"
    class="vm-stagger-list"
  >
    <TransitionGroup
      name="vm-stagger"
      :style="{
        '--vm-stagger-duration': `${duration}ms`,
      } as any"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <slot />
    </TransitionGroup>
  </component>
</template>

<script setup lang="ts">
import type { AnimationType } from '../../types'

export interface StaggerListProps {
  staggerDelay?: number
  animation?: AnimationType
  duration?: number
  tag?: string
}

const props = withDefaults(defineProps<StaggerListProps>(), {
  staggerDelay: 80,
  animation: 'fade',
  duration: 400,
  tag: 'div',
})

const beforeEnter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.opacity = '0'
  htmlEl.style.transitionDelay = `${(htmlEl.dataset.index ? parseInt(htmlEl.dataset.index) : 0) * props.staggerDelay}ms`

  switch (props.animation) {
    case 'slide':
      htmlEl.style.transform = 'translateY(20px)'
      break
    case 'bounce':
      htmlEl.style.transform = 'scale(0.5)'
      break
    case 'rotate':
      htmlEl.style.transform = 'rotate(-15deg)'
      break
  }
}

const enter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.transition = `all ${props.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  htmlEl.style.transitionDelay = `${(htmlEl.dataset.index ? parseInt(htmlEl.dataset.index) : 0) * props.staggerDelay}ms`

  requestAnimationFrame(() => {
    htmlEl.style.opacity = '1'
    htmlEl.style.transform = ''
  })
}

const leave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.transition = `all ${props.duration / 2}ms ease-in`
  htmlEl.style.opacity = '0'
  htmlEl.style.transform = 'translateX(-30px)'
}
</script>

<style scoped>
.vm-stagger-list {
  display: block;
}
</style>
