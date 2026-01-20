import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import message from '../message';

describe('Message 服务函数', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    document.body.innerHTML = '';
    message.clearInstances();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('应该创建默认消息', () => {
    void message.default('默认消息');
    expect(document.querySelector('.pure-message--container')).toBeTruthy();
  });

  it('应该创建主要类型消息', () => {
    void message.primary('主要消息');
    const container = document.querySelector('.pure-message--container');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('pure-message--primary')).toBe(true);
  });

  it('应该创建成功类型消息', () => {
    void message.success('成功消息');
    const container = document.querySelector('.pure-message--container');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('pure-message--success')).toBe(true);
  });

  it('应该创建错误类型消息', () => {
    void message.error('错误消息');
    const container = document.querySelector('.pure-message--container');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('pure-message--error')).toBe(true);
  });

  it('应该创建警告类型消息', () => {
    void message.warning('警告消息');
    const container = document.querySelector('.pure-message--container');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('pure-message--warning')).toBe(true);
  });

  it('应该创建信息类型消息', () => {
    void message.info('信息消息');
    const container = document.querySelector('.pure-message--container');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('pure-message--info')).toBe(true);
  });

  it('应该正确设置自定义持续时间', async () => {
    void message.success('自定义时间消息', {
      duration: 5000
    });
    
    expect(document.querySelector('.pure-message--container')).toBeTruthy();
    
    vi.advanceTimersByTime(3000);
    expect(document.querySelector('.pure-message--container')).toBeTruthy();
    
    vi.advanceTimersByTime(2000);
    expect(document.querySelector('.pure-message--container')).toBe(null);
  });

  it('应该正确显示关闭按钮', () => {
    void message.info('带关闭按钮的消息', {
      showClose: true
    });
    
    const closeButton = document.querySelector('.pure-message--close');
    expect(closeButton).toBeTruthy();
  });

  it('不应该显示关闭按钮当 showClose 为 false', () => {
    void message.info('不带关闭按钮的消息', {
      showClose: false
    });
    
    const closeButton = document.querySelector('.pure-message--close');
    expect(closeButton).toBe(null);
  });

  it('应该正确堆叠多个消息', () => {
    void message.success('消息 1');
    void message.success('消息 2');
    void message.success('消息 3');
    
    const containers = document.querySelectorAll('.pure-message--container');
    expect(containers.length).toBe(3);
  });

  it('应该正确计算堆叠位置', () => {
    void message.success('消息 1');
    void message.success('消息 2');
    void message.success('消息 3');
    
    const containers = document.querySelectorAll('.pure-message--container');
    const container1 = containers[0];
    const container2 = containers[1];
    const container3 = containers[2];
    
    expect(container1.getAttribute('style')).toContain('top: 20px');
    expect(container2.getAttribute('style')).toContain('top: 70px');
    expect(container3.getAttribute('style')).toContain('top: 120px');
  });

  it('应该在指定时间后自动关闭', async () => {
    void message.success('自动关闭的消息', {
      duration: 3000
    });
    
    expect(document.querySelector('.pure-message--container')).toBeTruthy();
    
    vi.advanceTimersByTime(3000);
    
    expect(document.querySelector('.pure-message--container')).toBe(null);
  });

});
