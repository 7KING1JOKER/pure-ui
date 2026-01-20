import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Message from '../Message.vue'

describe('Message 组件', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('应该正确渲染默认消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '默认消息',
        type: 'default',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').exists()).toBe(true)
    expect(wrapper.find('.pure-message--container').classes()).toContain('pure-message--default')
    expect(wrapper.find('.pure-message--text').text()).toBe('默认消息')
  })

  it('应该正确渲染主要类型消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '主要消息',
        type: 'primary',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').classes()).toContain('pure-message--primary')
  })

  it('应该正确渲染成功类型消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '操作成功！',
        type: 'success',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').classes()).toContain('pure-message--success')
  })

  it('应该正确渲染错误类型消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '操作失败！',
        type: 'error',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').classes()).toContain('pure-message--error')
  })

  it('应该正确渲染警告类型消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '请注意！',
        type: 'warning',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').classes()).toContain('pure-message--warning')
  })

  it('应该正确渲染信息类型消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '提示信息',
        type: 'info',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').classes()).toContain('pure-message--info')
  })

  it('应该正确渲染带关闭按钮的消息', () => {
    const wrapper = mount(Message, {
      props: {
        message: '可关闭的消息',
        showClose: true,
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--close').exists()).toBe(true)
  })

  it('不应该渲染关闭按钮当 showClose 为 false', () => {
    const wrapper = mount(Message, {
      props: {
        message: '不可关闭的消息',
        showClose: false,
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--close').exists()).toBe(false)
  })

  it('应该正确设置 offset', () => {
    const wrapper = mount(Message, {
      props: {
        message: '偏移消息',
        offset: 100,
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--container').attributes('style')).toContain('top: 100px')
  })

  it('应该正确渲染默认图标', () => {
    const wrapper = mount(Message, {
      props: {
        message: '默认消息',
        type: 'default',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--icon').text()).toBe('ℹ️')
  })

  it('应该正确渲染主要类型图标', () => {
    const wrapper = mount(Message, {
      props: {
        message: '主要消息',
        type: 'primary',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--icon').text()).toBe('🔵')
  })

  it('应该正确渲染成功类型图标', () => {
    const wrapper = mount(Message, {
      props: {
        message: '成功消息',
        type: 'success',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--icon').text()).toBe('✅')
  })

  it('应该正确渲染错误类型图标', () => {
    const wrapper = mount(Message, {
      props: {
        message: '错误消息',
        type: 'error',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--icon').text()).toBe('❌')
  })

  it('应该正确渲染警告类型图标', () => {
    const wrapper = mount(Message, {
      props: {
        message: '警告消息',
        type: 'warning',
        duration: 0,
      },
    })
    expect(wrapper.find('.pure-message--icon').text()).toBe('⚠️')
  })

  it('应该在指定时间后自动关闭', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '自动关闭的消息',
        duration: 3000,
      },
    })

    expect(wrapper.find('.pure-message--container').exists()).toBe(true)

    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').exists()).toBe(false)
  })

  it('应该触发 close 事件当自动关闭时', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '自动关闭的消息',
        duration: 3000,
      },
      attachTo: document.body,
    })

    expect(wrapper.find('.pure-message--container').exists()).toBe(true)

    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('应该触发 close 事件当点击关闭按钮时', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '手动关闭的消息',
        showClose: true,
        duration: 0,
      },
      attachTo: document.body,
    })

    await wrapper.find('.pure-message--close').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('鼠标悬停时应该暂停计时器', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '悬停消息',
        duration: 3000,
      },
    })

    await wrapper.find('.pure-message--container').trigger('mouseenter')
    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').exists()).toBe(true)
  })

  it('鼠标移开后应该恢复计时器', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '恢复消息',
        duration: 3000,
      },
      attachTo: document.body,
    })

    await wrapper.find('.pure-message--container').trigger('mouseenter')
    vi.advanceTimersByTime(2000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').exists()).toBe(true)

    await wrapper.find('.pure-message--container').trigger('mouseleave')
    vi.advanceTimersByTime(3000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').exists()).toBe(false)
  })

  it('应该正确响应 offset prop 的变化', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '偏移变化消息',
        offset: 20,
        duration: 0,
      },
    })

    expect(wrapper.find('.pure-message--container').attributes('style')).toContain('top: 20px')

    await wrapper.setProps({ offset: 50 })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').attributes('style')).toContain('top: 50px')
  })

  it('应该正确响应 visible prop 的变化', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '可见性消息',
        visible: true,
        duration: 0,
      },
    })

    expect(wrapper.find('.pure-message--container').exists()).toBe(true)

    await wrapper.setProps({ visible: false })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').exists()).toBe(false)
  })

  it('duration 为 0 时不应该自动关闭', async () => {
    const wrapper = mount(Message, {
      props: {
        message: '不自动关闭的消息',
        duration: 0,
      },
    })

    vi.advanceTimersByTime(10000)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.pure-message--container').exists()).toBe(true)
  })
})
