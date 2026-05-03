<template>
  <Transition
    :name="name"
    :mode="mode"
    :style="{
      '--vm-page-duration': `${duration}ms`,
    } as any"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
export interface PageTransitionProps {
  name?: string
  mode?: 'out-in' | 'in-out' | 'default'
  duration?: number
}

const props = withDefaults(defineProps<PageTransitionProps>(), {
  name: 'vm-page',
  mode: 'out-in',
  duration: 300,
})
</script>

<style scoped>
.vm-page-enter-active,
.vm-page-leave-active {
  transition:
    opacity var(--vm-page-duration, 300ms) ease,
    transform var(--vm-page-duration, 300ms) ease;
}

.vm-page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.vm-page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
