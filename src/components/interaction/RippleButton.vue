<template>
  <button
    ref="buttonRef"
    class="vm-ripple-button"
    :class="`vm-ripple-button--${variant}`"
    @click="handleClick"
  >
    <slot />
    <span
      v-for="ripple in ripples"
      :key="ripple.id"
      class="vm-ripple-button__ripple"
      :style="{
        left: `${ripple.x}px`,
        top: `${ripple.y}px`,
        width: `${ripple.size}px`,
        height: `${ripple.size}px`,
        backgroundColor: color,
        animationDuration: `${duration}ms`,
      }"
    />
  </button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { generateId } from '../../utils'

export interface RippleButtonProps {
  color?: string
  duration?: number
  rippleCount?: number
  variant?: 'filled' | 'outlined' | 'text'
}

const props = withDefaults(defineProps<RippleButtonProps>(), {
  color: 'rgba(255, 255, 255, 0.4)',
  duration: 600,
  rippleCount: 1,
  variant: 'filled',
})

const buttonRef = ref<HTMLElement | null>(null)

interface Ripple {
  id: string
  x: number
  y: number
  size: number
}

const ripples = reactive<Ripple[]>([])

const handleClick = (e: MouseEvent) => {
  const button = buttonRef.value
  if (!button) return

  const rect = button.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const size = Math.max(rect.width, rect.height) * 2

  for (let i = 0; i < props.rippleCount; i++) {
    const ripple: Ripple = {
      id: generateId('ripple'),
      x: x - size / 2,
      y: y - size / 2,
      size,
    }
    ripples.push(ripple)

    setTimeout(() => {
      const index = ripples.findIndex((r) => r.id === ripple.id)
      if (index > -1) ripples.splice(index, 1)
    }, props.duration)
  }
}
</script>

<style scoped>
.vm-ripple-button {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s, box-shadow 0.2s;
  outline: none;
}

.vm-ripple-button--filled {
  background-color: var(--vm-color-primary, #6366f1);
  color: white;
}

.vm-ripple-button--filled:hover {
  background-color: var(--vm-color-secondary, #8b5cf6);
}

.vm-ripple-button--outlined {
  background-color: transparent;
  border: 2px solid var(--vm-color-primary, #6366f1);
  color: var(--vm-color-primary, #6366f1);
}

.vm-ripple-button--outlined:hover {
  background-color: rgba(99, 102, 241, 0.1);
}

.vm-ripple-button--text {
  background-color: transparent;
  color: var(--vm-color-primary, #6366f1);
}

.vm-ripple-button--text:hover {
  background-color: rgba(99, 102, 241, 0.1);
}

.vm-ripple-button__ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: vm-ripple-effect linear;
  pointer-events: none;
}

@keyframes vm-ripple-effect {
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
