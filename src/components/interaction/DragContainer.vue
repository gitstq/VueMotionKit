<template>
  <div
    ref="containerRef"
    class="vm-drag-container"
    :style="{
      cursor: isDragging ? 'grabbing' : 'grab',
      userSelect: isDragging ? 'none' : 'auto',
    }"
    @mousedown="handleMouseDown"
    @touchstart.passive="handleTouchStart"
  >
    <div
      class="vm-drag-container__inner"
      :style="{
        transform: `translate3d(${currentX}px, ${currentY}px, 0)`,
        transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Axis } from '../../types'
import { clamp } from '../../utils'

export interface DragContainerProps {
  axis?: Axis
  bounds?: boolean
  handle?: string
}

const props = withDefaults(defineProps<DragContainerProps>(), {
  axis: 'both',
  bounds: true,
  handle: '',
})

const containerRef = ref<HTMLElement | null>(null)
const currentX = ref(0)
const currentY = ref(0)
const isDragging = ref(false)
let startX = 0
let startY = 0
let startTranslateX = 0
let startTranslateY = 0

const clampPosition = (x: number, y: number) => {
  if (!props.bounds || !containerRef.value) return { x, y }
  const container = containerRef.value
  const inner = container.firstElementChild as HTMLElement
  if (!inner) return { x, y }

  const maxX = 0
  const maxY = 0
  const minX = -(inner.scrollWidth - container.clientWidth)
  const minY = -(inner.scrollHeight - container.clientHeight)

  return {
    x: clamp(x, minX, maxX),
    y: clamp(y, minY, maxY),
  }
}

const handleMouseDown = (e: MouseEvent) => {
  if (props.handle) {
    const target = e.target as HTMLElement
    if (!target.closest(props.handle)) return
  }
  isDragging.value = true
  startX = e.clientX
  startY = e.clientY
  startTranslateX = currentX.value
  startTranslateY = currentY.value

  const handleMouseMove = (e: MouseEvent) => {
    const dx = e.clientX - startX
    const dy = e.clientY - startY

    let newX = startTranslateX
    let newY = startTranslateY

    if (props.axis === 'x' || props.axis === 'both') {
      newX = startTranslateX + dx
    }
    if (props.axis === 'y' || props.axis === 'both') {
      newY = startTranslateY + dy
    }

    const clamped = clampPosition(newX, newY)
    currentX.value = clamped.x
    currentY.value = clamped.y
  }

  const handleMouseUp = () => {
    isDragging.value = false
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
}

const handleTouchStart = (e: TouchEvent) => {
  if (props.handle) {
    const target = e.target as HTMLElement
    if (!target.closest(props.handle)) return
  }
  const touch = e.touches[0]
  isDragging.value = true
  startX = touch.clientX
  startY = touch.clientY
  startTranslateX = currentX.value
  startTranslateY = currentY.value

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0]
    const dx = touch.clientX - startX
    const dy = touch.clientY - startY

    let newX = startTranslateX
    let newY = startTranslateY

    if (props.axis === 'x' || props.axis === 'both') {
      newX = startTranslateX + dx
    }
    if (props.axis === 'y' || props.axis === 'both') {
      newY = startTranslateY + dy
    }

    const clamped = clampPosition(newX, newY)
    currentX.value = clamped.x
    currentY.value = clamped.y
  }

  const handleTouchEnd = () => {
    isDragging.value = false
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
  }

  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchend', handleTouchEnd)
}
</script>

<style scoped>
.vm-drag-container {
  overflow: hidden;
  position: relative;
}

.vm-drag-container__inner {
  will-change: transform;
  display: inline-block;
}
</style>
