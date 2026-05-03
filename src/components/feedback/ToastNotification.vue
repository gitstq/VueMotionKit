<template>
  <Teleport to="body">
    <Transition name="vm-toast">
      <div
        v-if="visible"
        class="vm-toast-notification"
        :class="`vm-toast-notification--${type} vm-toast-notification--${position}`"
        :style="{
          '--vm-toast-duration': `${duration}ms`,
        } as any"
      >
        <span class="vm-toast-notification__icon">
          <span v-if="type === 'success'">&#10003;</span>
          <span v-else-if="type === 'error'">&#10007;</span>
          <span v-else-if="type === 'warning'">&#9888;</span>
          <span v-else>&#8505;</span>
        </span>
        <span class="vm-toast-notification__message">{{ message }}</span>
        <button
          class="vm-toast-notification__close"
          @click="close"
        >
          &times;
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { ToastType } from '../../types'

export interface ToastNotificationProps {
  message: string
  type?: ToastType
  duration?: number
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom'
}

const props = withDefaults(defineProps<ToastNotificationProps>(), {
  type: 'info',
  duration: 3000,
  position: 'top-right',
})

const emit = defineEmits<{
  close: []
}>()

const visible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const close = () => {
  visible.value = false
  emit('close')
}

const show = () => {
  visible.value = true
  if (timer) clearTimeout(timer)
  if (props.duration > 0) {
    timer = setTimeout(close, props.duration)
  }
}

onMounted(() => {
  show()
})

watch(() => props.message, () => {
  show()
})

defineExpose({ close, show })
</script>

<style scoped>
.vm-toast-notification {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  min-width: 280px;
  max-width: 400px;
  font-size: 14px;
}

/* Positions */
.vm-toast-notification--top-right {
  top: 20px;
  right: 20px;
}

.vm-toast-notification--top-left {
  top: 20px;
  left: 20px;
}

.vm-toast-notification--bottom-right {
  bottom: 20px;
  right: 20px;
}

.vm-toast-notification--bottom-left {
  bottom: 20px;
  left: 20px;
}

.vm-toast-notification--top {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.vm-toast-notification--bottom {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

/* Types */
.vm-toast-notification--success {
  border-left: 4px solid #10b981;
}

.vm-toast-notification--error {
  border-left: 4px solid #ef4444;
}

.vm-toast-notification--warning {
  border-left: 4px solid #f59e0b;
}

.vm-toast-notification--info {
  border-left: 4px solid #6366f1;
}

.vm-toast-notification__icon {
  font-size: 16px;
  flex-shrink: 0;
}

.vm-toast-notification--success .vm-toast-notification__icon {
  color: #10b981;
}

.vm-toast-notification--error .vm-toast-notification__icon {
  color: #ef4444;
}

.vm-toast-notification--warning .vm-toast-notification__icon {
  color: #f59e0b;
}

.vm-toast-notification--info .vm-toast-notification__icon {
  color: #6366f1;
}

.vm-toast-notification__message {
  flex: 1;
  color: #374151;
}

.vm-toast-notification__close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #9ca3af;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
}

.vm-toast-notification__close:hover {
  color: #374151;
}

/* Transitions */
.vm-toast-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.vm-toast-leave-active {
  transition: all 0.2s ease-in;
}

.vm-toast-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.vm-toast-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
