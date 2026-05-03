<template>
  <span
    ref="elRef"
    class="vm-glitch-text"
    :class="[
      `vm-glitch-text--${intensity}`,
      { 'vm-glitch-text--hover': trigger === 'hover' },
    ]"
    :data-text="text"
    :style="{
      '--vm-glitch-color-1': colors?.[0] || '#ff00ff',
      '--vm-glitch-color-2': colors?.[1] || '#00ffff',
    } as any"
  >
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { GlitchIntensity } from '../../types'

export interface GlitchTextProps {
  text: string
  intensity?: GlitchIntensity
  colors?: string[]
  trigger?: 'always' | 'hover'
}

const props = withDefaults(defineProps<GlitchTextProps>(), {
  intensity: 'medium',
  colors: () => ['#ff00ff', '#00ffff'],
  trigger: 'always',
})

const elRef = ref<HTMLElement | null>(null)
</script>

<style scoped>
.vm-glitch-text {
  position: relative;
  display: inline-block;
  font-weight: bold;
}

.vm-glitch-text::before,
.vm-glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.vm-glitch-text::before {
  color: var(--vm-glitch-color-1);
  z-index: -1;
}

.vm-glitch-text::after {
  color: var(--vm-glitch-color-2);
  z-index: -2;
}

/* Always animate */
.vm-glitch-text:not(.vm-glitch-text--hover)::before,
.vm-glitch-text:not(.vm-glitch-text--hover)::after {
  animation: vm-glitch-1 2s infinite linear alternate-reverse;
}

.vm-glitch-text:not(.vm-glitch-text--hover)::after {
  animation: vm-glitch-2 3s infinite linear alternate-reverse;
}

/* Hover animate */
.vm-glitch-text--hover:hover::before {
  animation: vm-glitch-1 0.3s infinite linear alternate-reverse;
}

.vm-glitch-text--hover:hover::after {
  animation: vm-glitch-2 0.3s infinite linear alternate-reverse;
}

/* Intensity levels */
.vm-glitch-text--low::before,
.vm-glitch-text--low::after {
  opacity: 0.7;
}

.vm-glitch-text--medium::before,
.vm-glitch-text--medium::after {
  opacity: 0.85;
}

.vm-glitch-text--high::before,
.vm-glitch-text--high::after {
  opacity: 1;
}

.vm-glitch-text--high:not(.vm-glitch-text--hover)::before {
  animation-duration: 0.8s;
}

.vm-glitch-text--high:not(.vm-glitch-text--hover)::after {
  animation-duration: 1.2s;
}

@keyframes vm-glitch-1 {
  0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
  20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
  40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 3px); }
  60% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
  80% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, -2px); }
}

@keyframes vm-glitch-2 {
  0% { clip-path: inset(65% 0 13% 0); transform: translate(2px, -1px); }
  20% { clip-path: inset(15% 0 62% 0); transform: translate(-1px, 2px); }
  40% { clip-path: inset(78% 0 1% 0); transform: translate(2px, -3px); }
  60% { clip-path: inset(2% 0 78% 0); transform: translate(-2px, 1px); }
  80% { clip-path: inset(32% 0 45% 0); transform: translate(1px, 2px); }
}
</style>
