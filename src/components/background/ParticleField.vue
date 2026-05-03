<template>
  <canvas
    ref="canvasRef"
    class="vm-particle-field"
    :style="{ width: '100%', height: '100%' }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { randomInRange } from '../../utils'

export interface ParticleFieldProps {
  count?: number
  color?: string
  size?: number
  speed?: number
  connectLines?: boolean
  connectDistance?: number
}

const props = withDefaults(defineProps<ParticleFieldProps>(), {
  count: 50,
  color: 'rgba(99, 102, 241, 0.6)',
  size: 3,
  speed: 1,
  connectLines: true,
  connectDistance: 150,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { prefersReducedMotion } = useReducedMotion()
let animationFrame: number | null = null
let particles: Array<{
  x: number
  y: number
  vx: number
  vy: number
  size: number
}> = []

const initParticles = (width: number, height: number) => {
  particles = Array.from({ length: props.count }, () => ({
    x: randomInRange(0, width),
    y: randomInRange(0, height),
    vx: randomInRange(-0.5, 0.5) * props.speed,
    vy: randomInRange(-0.5, 0.5) * props.speed,
    size: randomInRange(props.size * 0.5, props.size * 1.5),
  }))
}

const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.clearRect(0, 0, width, height)

  // Draw connections
  if (props.connectLines) {
    ctx.strokeStyle = props.color
    ctx.lineWidth = 0.5
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < props.connectDistance) {
          ctx.globalAlpha = 1 - dist / props.connectDistance
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  // Draw particles
  ctx.globalAlpha = 1
  ctx.fillStyle = props.color
  for (const p of particles) {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

const update = (width: number, height: number) => {
  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy

    if (p.x < 0 || p.x > width) p.vx *= -1
    if (p.y < 0 || p.y > height) p.vy *= -1

    p.x = Math.max(0, Math.min(width, p.x))
    p.y = Math.max(0, Math.min(height, p.y))
  }
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = canvas.parentElement?.getBoundingClientRect()
  if (rect) {
    canvas.width = rect.width
    canvas.height = rect.height
  }

  const width = canvas.width
  const height = canvas.height

  if (particles.length === 0) initParticles(width, height)

  if (!prefersReducedMotion.value) {
    update(width, height)
  }

  draw(ctx, width, height)
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const rect = canvas.parentElement?.getBoundingClientRect()
  if (rect) {
    canvas.width = rect.width
    canvas.height = rect.height
    initParticles(canvas.width, canvas.height)
  }

  animationFrame = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.vm-particle-field {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
