<template>
  <canvas
    ref="canvasRef"
    class="vm-starfield-bg"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { randomInRange } from '../../utils'

export interface StarfieldBgProps {
  count?: number
  speed?: number
  depth?: number
  color?: string
}

const props = withDefaults(defineProps<StarfieldBgProps>(), {
  count: 200,
  speed: 1,
  depth: 1000,
  color: '#ffffff',
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { prefersReducedMotion } = useReducedMotion()
let animationFrame: number | null = null

interface Star {
  x: number
  y: number
  z: number
  prevZ: number
}

let stars: Star[] = []

const initStars = () => {
  stars = Array.from({ length: props.count }, () => ({
    x: randomInRange(-1000, 1000),
    y: randomInRange(-1000, 1000),
    z: randomInRange(0, props.depth),
    prevZ: 0,
  }))
}

const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)'
  ctx.fillRect(0, 0, width, height)

  const cx = width / 2
  const cy = height / 2

  for (const star of stars) {
    star.prevZ = star.z
    star.z -= props.speed * 2

    if (star.z <= 0) {
      star.x = randomInRange(-1000, 1000)
      star.y = randomInRange(-1000, 1000)
      star.z = props.depth
      star.prevZ = props.depth
    }

    const sx = (star.x / star.z) * 200 + cx
    const sy = (star.y / star.z) * 200 + cy
    const px = (star.x / star.prevZ) * 200 + cx
    const py = (star.y / star.prevZ) * 200 + cy

    const size = Math.max(0.5, (1 - star.z / props.depth) * 3)

    ctx.beginPath()
    ctx.strokeStyle = props.color
    ctx.lineWidth = size
    ctx.globalAlpha = 1 - star.z / props.depth
    ctx.moveTo(px, py)
    ctx.lineTo(sx, sy)
    ctx.stroke()
  }

  ctx.globalAlpha = 1
}

const animate = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const parent = canvas.parentElement
  if (parent) {
    canvas.width = parent.clientWidth
    canvas.height = parent.clientHeight
  }

  if (!prefersReducedMotion.value) {
    draw(ctx, canvas.width, canvas.height)
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  initStars()
  animationFrame = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.vm-starfield-bg {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
