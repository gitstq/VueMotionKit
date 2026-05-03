import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollProgress(element?: Ref<HTMLElement | null>) {
  const progress = ref(0)
  const scrollY = ref(0)

  const handleScroll = () => {
    const target = element?.value || document.documentElement
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    scrollY.value = scrollTop
    progress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { progress, scrollY }
}
