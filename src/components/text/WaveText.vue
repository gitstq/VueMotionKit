<template>
  <span class="vm-wave-text">
    <span
      v-for="(char, index) in characters"
      :key="index"
      class="vm-wave-text__char"
      :style="{
        animationDelay: `${index * (duration / characters.length)}ms`,
        animationDuration: `${duration}ms`,
        '--vm-wave-amplitude': `${amplitude}px`,
        color: color || undefined,
      } as any"
    >{{ char === ' ' ? '\u00A0' : char }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface WaveTextProps {
  text: string
  amplitude?: number
  frequency?: number
  duration?: number
  color?: string
}

const props = withDefaults(defineProps<WaveTextProps>(), {
  amplitude: 10,
  frequency: 1,
  duration: 2000,
  color: '',
})

const characters = computed(() => props.text.split(''))
</script>

<style scoped>
.vm-wave-text {
  display: inline-block;
}

.vm-wave-text__char {
  display: inline-block;
  animation: vm-wave-char ease-in-out infinite;
}

@keyframes vm-wave-char {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(var(--vm-wave-amplitude, 10px) * -1));
  }
}
</style>
