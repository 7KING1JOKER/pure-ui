import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import message from '../message'

describe('Message 服务函数', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    document.body.innerHTML = ''
    message.clearInstances()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('应该创建默认消息', () => {
    void message.default('默认消息')
    expect(document.querySelector('.pure-message--container')).toBeTruthy()
  })

  it('应该正确设置自定义持续时间', async () => {
    void message.default('自定义时间消息', {
      duration: 5000,
    })

    expect(document.querySelector('.pure-message--container')).toBeTruthy()

    vi.advanceTimersByTime(3000)
    expect(document.querySelector('.pure-message--container')).toBeTruthy()

    vi.advanceTimersByTime(2000)
    vi.advanceTimersByTime(400)
    expect(document.querySelector('.pure-message--container')).toBe(null)
  })

  it('应该正确显示关闭按钮', () => {
    void message.default('带关闭按钮的消息', {
      showClose: true,
    })

    const closeButton = document.querySelector('.pure-message--close')
    expect(closeButton).toBeTruthy()
  })

  it('不应该显示关闭按钮当 showClose 为 false', () => {
    void message.default('不带关闭按钮的消息', {
      showClose: false,
    })

    const closeButton = document.querySelector('.pure-message--close')
    expect(closeButton).toBe(null)
  })

  it('应该正确堆叠多个消息', () => {
    void message.default('消息 1')
    void message.default('消息 2')
    void message.default('消息 3')

    const containers = document.querySelectorAll('.pure-message--container')
    expect(containers.length).toBe(3)
  })

  it('应该正确计算堆叠位置', () => {
    void message.default('消息 1')
    void message.default('消息 2')
    void message.default('消息 3')

    const containers = document.querySelectorAll('.pure-message--container')
    const container1 = containers[0]
    const container2 = containers[1]
    const container3 = containers[2]

    expect(container1.getAttribute('style')).toContain('top: 20px')
    expect(container2.getAttribute('style')).toContain('top: 70px')
    expect(container3.getAttribute('style')).toContain('top: 120px')
  })

  it('应该在指定时间后自动关闭', async () => {
    void message.default('自动关闭的消息', {
      duration: 3000,
    })

    expect(document.querySelector('.pure-message--container')).toBeTruthy()

    vi.advanceTimersByTime(3000)
    vi.advanceTimersByTime(10000)

    expect(document.querySelector('.pure-message--container')).toBe(null)
  })

  it('应该正确关闭所有消息', () => {
    void message.default('消息 1')
    void message.default('消息 2')
    void message.default('消息 3')

    expect(document.querySelectorAll('.pure-message--container').length).toBe(3)

    message.closeAll()

    expect(document.querySelectorAll('.pure-message--container').length).toBe(0)
  })

  it('应该正确使用自定义 offset', () => {
    void message.default('自定义偏移消息', {
      offset: 100,
    })

    const container = document.querySelector('.pure-message--container')
    expect(container?.getAttribute('style')).toContain('top: 100px')
  })

  it('应该正确堆叠多个消息并计算偏移', () => {
    void message.default('消息 1', { offset: 50 })
    void message.default('消息 2')
    void message.default('消息 3')

    const containers = document.querySelectorAll('.pure-message--container')
    expect(containers.length).toBe(3)
    expect(containers[0].getAttribute('style')).toContain('top: 50px')
    expect(containers[1].getAttribute('style')).toContain('top: 100px')
    expect(containers[2].getAttribute('style')).toContain('top: 150px')
  })
})
