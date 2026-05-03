<template>
  <div
    class="vm-grid-bg"
    :class="{ 'vm-grid-bg--animated': animate }"
    :style="{
      '--vm-grid-color': color,
      '--vm-grid-opacity': opacity,
      '--vm-grid-cell-size': `${cellSize}px`,
      '--vm-grid-speed': `${speed}s`,
    } as any"
  />
</template>

<script setup lang="ts">
export interface GridBgProps {
  color?: string
  opacity?: number
  cellSize?: number
  animate?: boolean
  speed?: number
}

const props = withDefaults(defineProps<GridBgProps>(), {
  color: 'rgba(99, 102, 241, 0.15)',
  opacity: 1,
  cellSize: 40,
  animate: true,
  speed: 3,
})
</script>

<style scoped>
.vm-grid-bg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(var(--vm-grid-color, rgba(99, 102, 241, 0.15)) 1px, transparent 1px),
    linear-gradient(90deg, var(--vm-grid-color, rgba(99, 102, 241, 0.15)) 1px, transparent 1px);
  background-size: var(--vm-grid-cell-size, 40px) var(--vm-grid-cell-size, 40px);
  opacity: var(--vm-grid-opacity, 1);
  transform: perspective(500px) rotateX(60deg);
  transform-origin: center center;
  pointer-events: none;
}

.vm-grid-bg--animated {
  animation: vm-grid-move var(--vm-grid-speed, 3s) linear infinite;
}

@keyframes vm-grid-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 var(--vm-grid-cell-size, 40px);
  }
}
</style>
