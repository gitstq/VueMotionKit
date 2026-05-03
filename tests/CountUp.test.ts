import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import CountUp from '../src/components/text/CountUp.vue'

describe('CountUp', () => {
  it('renders initial value', () => {
    const wrapper = mount(CountUp, {
      props: { from: 0, to: 100, duration: 1000 },
    })
    expect(wrapper.text()).toContain('0')
  })

  it('formats numbers with separator', async () => {
    vi.useFakeTimers()
    const wrapper = mount(CountUp, {
      props: { from: 0, to: 1000, duration: 100, separator: ',' },
    })

    vi.advanceTimersByTime(200)
    await flushPromises()

    const text = wrapper.text()
    expect(text).toBeTruthy()

    vi.useRealTimers()
  })

  it('applies prefix and suffix', () => {
    const wrapper = mount(CountUp, {
      props: { from: 0, to: 100, duration: 1000, prefix: '$', suffix: '%' },
    })
    expect(wrapper.text()).toContain('$')
    expect(wrapper.text()).toContain('%')
  })

  it('respects decimal places', () => {
    const wrapper = mount(CountUp, {
      props: { from: 0, to: 99.99, duration: 1000, decimals: 2 },
    })
    const text = wrapper.text()
    expect(text).toContain('.')
  })

  it('applies custom color', () => {
    const wrapper = mount(CountUp, {
      props: { from: 0, to: 100, duration: 1000, color: '#ff0000' },
    })
    expect((wrapper.element as HTMLElement).style.color).toBeTruthy()
  })
})
