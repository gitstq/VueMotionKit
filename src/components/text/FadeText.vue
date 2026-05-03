<template>
  <span
    ref="elRef"
    class="vm-fade-text"
    :class="[
      `vm-fade-text--${direction}`,
      { 'vm-fade-text--visible': isVisible || trigger !== 'scroll' },
    ]"
    :style="{
      animationDuration: `${duration}ms`,
      animationDelay: `${delay}ms`,
      '--vm-fade-distance': `${distance}px`,
    } as any"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Direction, TriggerMode } from '../../types'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'

export interface FadeTextProps {
  direction?: Direction
  duration?: number
  delay?: number
  distance?: number
  trigger?: TriggerMode
}

const props = withDefaults(defineProps<FadeTextProps>(), {
  direction: 'up',
  duration: 600,
  delay: 0,
  distance: 20,
  trigger: 'mount',
})

const elRef = ref<HTMLElement | null>(null)
const { isVisible } = useIntersectionObserver(elRef, {
  threshold: 0.1,
  once: true,
})
</script>

<style scoped>
.vm-fade-text {
  display: inline-block;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-timing-function: var(--vm-easing, cubic-bezier(0.25, 0.46, 0.45, 0.94));
}

.vm-fade-text--visible.vm-fade-text--up {
  animation-name: vm-fade-up;
}

.vm-fade-text--visible.vm-fade-text--down {
  animation-name: vm-fade-down;
}

.vm-fade-text--visible.vm-fade-text--left {
  animation-name: vm-fade-left;
}

.vm-fade-text--visible.vm-fade-text--right {
  animation-name: vm-fade-right;
}

@keyframes vm-fade-up {
  from {
    opacity: 0;
    transform: translateY(var(--vm-fade-distance, 20px));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes vm-fade-down {
  from {
    opacity: 0;
    transform: translateY(calc(var(--vm-fade-distance, 20px) * -1));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes vm-fade-left {
  from {
    opacity: 0;
    transform: translateX(var(--vm-fade-distance, 20px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes vm-fade-right {
  from {
    opacity: 0;
    transform: translateX(calc(var(--vm-fade-distance, 20px) * -1));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
