import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GradientText from '../src/components/text/GradientText.vue'

describe('GradientText', () => {
  it('renders default slot content', () => {
    const wrapper = mount(GradientText, {
      slots: { default: 'Hello World' },
    })
    expect(wrapper.text()).toBe('Hello World')
  })

  it('applies custom colors', () => {
    const wrapper = mount(GradientText, {
      props: {
        colors: ['#ff0000', '#00ff00'],
      },
      slots: { default: 'Test' },
    })
    const el = wrapper.element as HTMLElement
    expect(el.style.backgroundImage).toContain('#ff0000')
    expect(el.style.backgroundImage).toContain('#00ff00')
  })

  it('applies custom font weight', () => {
    const wrapper = mount(GradientText, {
      props: { fontWeight: '900' },
      slots: { default: 'Test' },
    })
    expect((wrapper.element as HTMLElement).style.fontWeight).toBe('900')
  })

  it('applies custom font size', () => {
    const wrapper = mount(GradientText, {
      props: { fontSize: '48px' },
      slots: { default: 'Test' },
    })
    expect((wrapper.element as HTMLElement).style.fontSize).toBe('48px')
  })

  it('applies diagonal direction', () => {
    const wrapper = mount(GradientText, {
      props: { direction: 'diagonal' },
      slots: { default: 'Test' },
    })
    const el = wrapper.element as HTMLElement
    expect(el.style.backgroundImage).toContain('135deg')
  })
})
