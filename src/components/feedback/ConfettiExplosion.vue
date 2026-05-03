<template>
  <div
    ref="containerRef"
    class="vm-confetti-explosion"
  >
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="vm-confetti-explosion__particle"
      :style="{
        left: '50%',
        top: '50%',
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.color,
        '--vm-confetti-x': `${particle.x}px`,
        '--vm-confetti-y': `${particle.y}px`,
        '--vm-confetti-rotation': `${particle.rotation}deg`,
        '--vm-confetti-duration': `${duration}ms`,
        animationDuration: `${duration}ms`,
        animationDelay: `${particle.delay}ms`,
        animationTimingFunction: particle.easing,
      } as any"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { generateId, randomInRange } from '../../utils'

export interface ConfettiExplosionProps {
  particleCount?: number
  colors?: string[]
  spread?: number
  duration?: number
  trigger?: boolean
}

const props = withDefaults(defineProps<ConfettiExplosionProps>(), {
  particleCount: 50,
  colors: () => ['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e', '#fbbf24', '#34d399'],
  spread: 200,
  duration: 1500,
  trigger: false,
})

const containerRef = ref<HTMLElement | null>(null)

interface Particle {
  id: string
  x: number
  y: number
  size: number
  color: string
  rotation: number
  delay: number
  easing: string
}

const particles = ref<Particle[]>([])

const createParticles = () => {
  particles.value = Array.from({ length: props.particleCount }, () => ({
    id: generateId('confetti'),
    x: randomInRange(-props.spread, props.spread),
    y: randomInRange(-props.spread, props.spread * 0.5),
    size: randomInRange(4, 10),
    color: props.colors[Math.floor(Math.random() * props.colors.length)],
    rotation: randomInRange(0, 720),
    delay: randomInRange(0, 100),
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }))
}

onMounted(() => {
  if (props.trigger) createParticles()
})

watch(() => props.trigger, (val) => {
  if (val) createParticles()
})
</script>

<style scoped>
.vm-confetti-explosion {
  position: relative;
  width: 0;
  height: 0;
  pointer-events: none;
}

.vm-confetti-explosion__particle {
  position: absolute;
  border-radius: 2px;
  animation: vm-confetti-burst forwards;
  opacity: 0;
}

@keyframes vm-confetti-burst {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(var(--vm-confetti-x, 0), var(--vm-confetti-y, 0)) rotate(var(--vm-confetti-rotation, 360deg));
    opacity: 0;
  }
}
</style>
