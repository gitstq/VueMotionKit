<template>
  <span
    ref="elRef"
    class="vm-split-text"
    :class="{ 'vm-split-text--hover': trigger === 'hover' }"
  >
    <span
      v-for="(part, index) in parts"
      :key="index"
      class="vm-split-text__part"
      :class="[
        `vm-split-text__part--${animation}`,
        { 'vm-split-text__part--visible': isVisible || trigger !== 'scroll' },
      ]"
      :style="{
        animationDelay: `${index * staggerDelay}ms`,
        animationDuration: `${duration}ms`,
      }"
    >{{ part === ' ' ? '\u00A0' : part }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { SplitMode, AnimationType, TriggerMode } from '../../types'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface SplitTextProps {
  text: string
  splitBy?: SplitMode
  animation?: AnimationType
  staggerDelay?: number
  duration?: number
  trigger?: TriggerMode
}

const props = withDefaults(defineProps<SplitTextProps>(), {
  splitBy: 'chars',
  animation: 'fade',
  staggerDelay: 50,
  duration: 500,
  trigger: 'mount',
})

const elRef = ref<HTMLElement | null>(null)
const { prefersReducedMotion } = useReducedMotion()
const { isVisible } = useIntersectionObserver(elRef, {
  threshold: 0.1,
  once: true,
})

const parts = computed(() => {
  if (props.splitBy === 'words') {
    return props.text.split(/(\s+)/)
  }
  return props.text.split('')
})
</script>

<style scoped>
.vm-split-text {
  display: inline;
}

.vm-split-text__part {
  display: inline-block;
  opacity: 0;
  animation-fill-mode: forwards;
}

.vm-split-text__part--visible.vm-split-text__part--fade {
  animation-name: vm-fade-in;
}

.vm-split-text__part--visible.vm-split-text__part--slide {
  animation-name: vm-fade-in-up;
}

.vm-split-text__part--visible.vm-split-text__part--bounce {
  animation-name: vm-bounce-in;
}

.vm-split-text__part--visible.vm-split-text__part--rotate {
  animation-name: vm-rotate-in;
}

/* Hover mode */
.vm-split-text--hover .vm-split-text__part {
  opacity: 1;
  transition: all 0.3s ease;
}

.vm-split-text--hover:hover .vm-split-text__part--fade {
  animation: none;
}

.vm-split-text--hover:hover .vm-split-text__part--slide {
  animation: none;
}

.vm-split-text--hover:hover .vm-split-text__part {
  opacity: 0;
  animation-fill-mode: forwards;
}

.vm-split-text--hover:hover .vm-split-text__part--fade {
  animation-name: vm-fade-in;
}

.vm-split-text--hover:hover .vm-split-text__part--slide {
  animation-name: vm-fade-in-up;
}

.vm-split-text--hover:hover .vm-split-text__part--bounce {
  animation-name: vm-bounce-in;
}

.vm-split-text--hover:hover .vm-split-text__part--rotate {
  animation-name: vm-rotate-in;
}

@keyframes vm-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes vm-fade-in-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes vm-bounce-in {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

@keyframes vm-rotate-in {
  from { opacity: 0; transform: rotate(-180deg) scale(0); }
  to { opacity: 1; transform: rotate(0) scale(1); }
}
</style>
