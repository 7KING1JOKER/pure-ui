import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button 组件', () => {
  it('应该正确渲染默认按钮', () => {
    const wrapper = mount(Button) 
    expect(wrapper.classes()).toContain('pure-button')
  })

  it('应该正确渲染大尺寸按钮', () => {
    const wrapper = mount(Button, {
      props: { size: 'large' },
    })
    expect(wrapper.classes()).toContain('pure-button--large')
  })

  it('应该正确渲染中等尺寸按钮', () => {
    const wrapper = mount(Button, {
      props: { size: 'medium' },
    })
    expect(wrapper.classes()).toContain('pure-button--medium')
  })

  it('应该正确渲染小尺寸按钮', () => {
    const wrapper = mount(Button, {
      props: { size: 'small' },
    })
    expect(wrapper.classes()).toContain('pure-button--small')
  })

  it('应该正确渲染禁用状态按钮', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.classes()).toContain('pure-button--disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('应该正确渲染加载状态按钮', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.classes()).toContain('pure-button--loading')
    expect(wrapper.find('.pure-button__loading').exists()).toBe(true)
  })

  it('应该正确渲染块级按钮', () => {
    const wrapper = mount(Button, {
      props: { block: true },
    })
    expect(wrapper.classes()).toContain('pure-button--block')
  })

  it('应该正确触发点击事件', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('禁用状态下不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('加载状态下不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('应该正确渲染自定义内容', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '自定义按钮文本',
      },
    })
    expect(wrapper.text()).toBe('自定义按钮文本')
  })

  it('应该正确渲染图标和文本', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span>🎉</span><span>图标按钮</span>',
      },
    })
    expect(wrapper.html()).toContain('🎉')
    expect(wrapper.html()).toContain('图标按钮')
  })

  it('应该创建波纹效果', async () => {
    const wrapper = mount(Button, {
      attachTo: document.body,
    })
    
    const button = wrapper.find('button')
    await button.trigger('mousedown', {
      pageX: 100,
      pageY: 100,
    })
    
    const ripples = wrapper.find('.ripples')
    expect(ripples.exists()).toBe(true)
    expect(ripples.find('.pure-button__ripple').exists()).toBe(true)
  })

  it('禁用状态下不应该创建波纹效果', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      attachTo: document.body,
    })
    
    const button = wrapper.find('button')
    await button.trigger('mousedown', {
      pageX: 100,
      pageY: 100,
    })
    
    const ripples = wrapper.find('.ripples')
    expect(ripples.exists()).toBe(true)
    expect(ripples.find('.pure-button__ripple').exists()).toBe(false)
  })

  it('加载状态下不应该创建波纹效果', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      attachTo: document.body,
    })
    
    const button = wrapper.find('button')
    await button.trigger('mousedown', {
      pageX: 100,
      pageY: 100,
    })
    
    const ripples = wrapper.find('.ripples')
    expect(ripples.exists()).toBe(true)
    expect(ripples.find('.pure-button__ripple').exists()).toBe(false)
  })

  it('波纹效果应该在动画结束后移除', async () => {
    const wrapper = mount(Button, {
      attachTo: document.body,
    })
    
    const button = wrapper.find('button')
    await button.trigger('mousedown', {
      pageX: 100,
      pageY: 100,
    })
    
    const ripple = wrapper.find('.pure-button__ripple')
    expect(ripple.exists()).toBe(true)
    
    const animationEndEvent = document.createEvent('Event')
    animationEndEvent.initEvent('animationend', true, true)
    ripple.element.dispatchEvent(animationEndEvent)
    
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.pure-button__ripple').exists()).toBe(false)
  })
})
