import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TiltCard from '../src/components/interaction/TiltCard.vue'

describe('TiltCard', () => {
  it('renders slot content', () => {
    const wrapper = mount(TiltCard, {
      slots: { default: '<div class="inner">Card Content</div>' },
    })
    expect(wrapper.find('.inner').exists()).toBe(true)
    expect(wrapper.text()).toBe('Card Content')
  })

  it('applies perspective style', () => {
    const wrapper = mount(TiltCard, {
      props: { perspective: 1500 },
      slots: { default: '<div>Content</div>' },
    })
    const inner = wrapper.find('.vm-tilt-card__inner')
    expect(inner.attributes('style')).toContain('1500')
  })

  it('shows glare by default', () => {
    const wrapper = mount(TiltCard, {
      slots: { default: '<div>Content</div>' },
    })
    expect(wrapper.find('.vm-tilt-card__glare').exists()).toBe(true)
  })

  it('hides glare when glare prop is false', () => {
    const wrapper = mount(TiltCard, {
      props: { glare: false },
      slots: { default: '<div>Content</div>' },
    })
    expect(wrapper.find('.vm-tilt-card__glare').exists()).toBe(false)
  })
})
