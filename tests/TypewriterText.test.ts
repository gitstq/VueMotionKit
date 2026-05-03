import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import TypewriterText from '../src/components/text/TypewriterText.vue'

describe('TypewriterText', () => {
  it('renders with cursor initially', () => {
    const wrapper = mount(TypewriterText, {
      props: { text: 'Hello', speed: 50 },
    })
    // Initially shows cursor character
    expect(wrapper.find('.vm-typewriter__cursor').exists()).toBe(true)
  })

  it('shows cursor by default', () => {
    const wrapper = mount(TypewriterText, {
      props: { text: 'Hello' },
    })
    expect(wrapper.find('.vm-typewriter__cursor').exists()).toBe(true)
  })

  it('hides cursor when cursor prop is false', () => {
    const wrapper = mount(TypewriterText, {
      props: { text: 'Hello', cursor: false },
    })
    expect(wrapper.find('.vm-typewriter__cursor').exists()).toBe(false)
  })

  it('uses custom cursor character', () => {
    const wrapper = mount(TypewriterText, {
      props: { text: 'Hello', cursorChar: '_' },
    })
    expect(wrapper.find('.vm-typewriter__cursor').text()).toBe('_')
  })

  it('types characters over time', async () => {
    vi.useFakeTimers()
    const wrapper = mount(TypewriterText, {
      props: { text: 'Hi', speed: 50 },
    })

    // Advance past the first character
    vi.advanceTimersByTime(200)
    await flushPromises()

    const text = wrapper.text().replace('|', '').trim()
    // Should have typed at least the first character
    expect(text.length).toBeGreaterThanOrEqual(1)

    vi.advanceTimersByTime(200)
    await flushPromises()

    const finalText = wrapper.text().replace('|', '').trim()
    expect(finalText).toBe('Hi')

    vi.useRealTimers()
  })
})
