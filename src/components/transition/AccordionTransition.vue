<template>
  <Transition
    name="vm-accordion"
    :style="{
      '--vm-accordion-duration': `${duration}ms`,
      '--vm-accordion-easing': easing,
    } as any"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
export interface AccordionTransitionProps {
  duration?: number
  easing?: string
}

const props = withDefaults(defineProps<AccordionTransitionProps>(), {
  duration: 300,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
})

const beforeEnter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
  htmlEl.style.overflow = 'hidden'
}

const enter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = `${htmlEl.scrollHeight}px`
}

const afterEnter = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = ''
  htmlEl.style.overflow = ''
}

const beforeLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = `${htmlEl.scrollHeight}px`
  htmlEl.style.overflow = 'hidden'
}

const leave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = '0'
}

const afterLeave = (el: Element) => {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = ''
  htmlEl.style.overflow = ''
}
</script>

<style scoped>
.vm-accordion-enter-active,
.vm-accordion-leave-active {
  transition: height var(--vm-accordion-duration, 300ms) var(--vm-accordion-easing, ease);
  overflow: hidden;
}
</style>
