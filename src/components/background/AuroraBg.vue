<template>
  <div class="vm-aurora-bg" :style="containerStyle">
    <div
      v-for="(blob, index) in blobs"
      :key="index"
      class="vm-aurora-bg__blob"
      :style="{
        background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
        width: blob.size,
        height: blob.size,
        left: blob.x,
        top: blob.y,
        animationDuration: `${speed}s`,
        animationDelay: `${index * (speed / blobs.length)}s`,
        opacity,
        filter: `blur(${blur}px)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface AuroraBgProps {
  colors?: string[]
  speed?: number
  opacity?: number
  blur?: number
}

const props = withDefaults(defineProps<AuroraBgProps>(), {
  colors: () => ['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e'],
  speed: 8,
  opacity: 0.5,
  blur: 80,
})

const { prefersReducedMotion } = useReducedMotion()

const blobs = computed(() =>
  props.colors.map((color, i) => ({
    color,
    size: `${30 + Math.random() * 20}%`,
    x: `${Math.random() * 60 + 10}%`,
    y: `${Math.random() * 60 + 10}%`,
  }))
)

const containerStyle = computed(() => ({
  '--vm-aurora-speed': `${props.speed}s`,
}))
</script>

<style scoped>
.vm-aurora-bg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.vm-aurora-bg__blob {
  position: absolute;
  border-radius: 50%;
  animation: vm-aurora ease-in-out infinite;
  pointer-events: none;
}

@keyframes vm-aurora {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(30px, -50px) scale(1.1) rotate(90deg);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9) rotate(180deg);
  }
  75% {
    transform: translate(50px, 30px) scale(1.05) rotate(270deg);
  }
}
</style>
