<template>
  <Transition
    name="vm-fade-expand"
    :style="{
      '--vm-fade-expand-duration': `${duration}ms`,
      '--vm-fade-expand-easing': easing,
    } as any"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
export interface FadeExpandProps {
  duration?: number
  easing?: string
}

const props = withDefaults(defineProps<FadeExpandProps>(), {
  duration: 300,
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
})
</script>

<style scoped>
.vm-fade-expand-enter-active,
.vm-fade-expand-leave-active {
  transition:
    opacity var(--vm-fade-expand-duration, 300ms) var(--vm-fade-expand-easing, ease),
    max-height var(--vm-fade-expand-duration, 300ms) var(--vm-fade-expand-easing, ease);
  overflow: hidden;
}

.vm-fade-expand-enter-from,
.vm-fade-expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.vm-fade-expand-enter-to,
.vm-fade-expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>
