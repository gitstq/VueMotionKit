<template>
  <div class="vm-gradient-orb" :class="`vm-gradient-orb--${position}`">
    <div
      class="vm-gradient-orb__orb"
      :style="{
        background: `radial-gradient(circle, ${colors.join(', ')})`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${speed}s`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { OrbPosition } from '../../types'

export interface GradientOrbProps {
  colors?: string[]
  size?: number
  speed?: number
  position?: OrbPosition
}

const props = withDefaults(defineProps<GradientOrbProps>(), {
  colors: () => ['#6366f1', '#8b5cf6', '#06b6d4'],
  size: 300,
  speed: 6,
  position: 'center',
})
</script>

<style scoped>
.vm-gradient-orb {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.vm-gradient-orb__orb {
  border-radius: 50%;
  filter: blur(60px);
  animation: vm-orb-float ease-in-out infinite;
  opacity: 0.6;
}

.vm-gradient-orb--top-left {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.vm-gradient-orb--top-right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.vm-gradient-orb--bottom-left {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.vm-gradient-orb--bottom-right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.vm-gradient-orb--center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes vm-orb-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
</style>
