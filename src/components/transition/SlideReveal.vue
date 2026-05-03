<template>
  <Transition
    :name="`vm-slide-reveal-${direction}`"
    :style="{
      '--vm-slide-duration': `${duration}ms`,
      '--vm-slide-delay': `${delay}ms`,
      '--vm-slide-easing': easing,
    } as any"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import type { Direction } from '../../types'

export interface SlideRevealProps {
  direction?: Direction
  duration?: number
  delay?: number
  easing?: string
}

const props = withDefaults(defineProps<SlideRevealProps>(), {
  direction: 'left',
  duration: 500,
  delay: 0,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
})
</script>

<style scoped>
.vm-slide-reveal-left-enter-active,
.vm-slide-reveal-left-leave-active,
.vm-slide-reveal-right-enter-active,
.vm-slide-reveal-right-leave-active,
.vm-slide-reveal-up-enter-active,
.vm-slide-reveal-up-leave-active,
.vm-slide-reveal-down-enter-active,
.vm-slide-reveal-down-leave-active {
  transition:
    transform var(--vm-slide-duration, 500ms) var(--vm-slide-easing, ease),
    opacity var(--vm-slide-duration, 500ms) var(--vm-slide-easing, ease);
  transition-delay: var(--vm-slide-delay, 0ms);
}

/* Left */
.vm-slide-reveal-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.vm-slide-reveal-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Right */
.vm-slide-reveal-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.vm-slide-reveal-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Up */
.vm-slide-reveal-up-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.vm-slide-reveal-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Down */
.vm-slide-reveal-down-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.vm-slide-reveal-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
