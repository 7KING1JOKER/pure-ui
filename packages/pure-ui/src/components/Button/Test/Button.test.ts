import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button 组件', () => {
  it('应该正确渲染默认按钮', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('pure-button');
    expect(wrapper.classes()).toContain('pure-button--default');
  });

  it('应该正确渲染主要类型按钮', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' }
    });
    expect(wrapper.classes()).toContain('pure-button--primary');
  });

  it('应该正确渲染成功类型按钮', () => {
    const wrapper = mount(Button, {
      props: { type: 'success' }
    });
    expect(wrapper.classes()).toContain('pure-button--success');
  });

  it('应该正确渲染警告类型按钮', () => {
    const wrapper = mount(Button, {
      props: { type: 'warning' }
    });
    expect(wrapper.classes()).toContain('pure-button--warning');
  });

  it('应该正确渲染危险类型按钮', () => {
    const wrapper = mount(Button, {
      props: { type: 'danger' }
    });
    expect(wrapper.classes()).toContain('pure-button--danger');
  });

  it('应该正确渲染信息类型按钮', () => {
    const wrapper = mount(Button, {
      props: { type: 'info' }
    });
    expect(wrapper.classes()).toContain('pure-button--info');
  });

  it('应该正确渲染大尺寸按钮', () => {
    const wrapper = mount(Button, {
      props: { size: 'large' }
    });
    expect(wrapper.classes()).toContain('pure-button--large');
  });

  it('应该正确渲染中等尺寸按钮', () => {
    const wrapper = mount(Button, {
      props: { size: 'medium' }
    });
    expect(wrapper.classes()).toContain('pure-button--medium');
  });

  it('应该正确渲染小尺寸按钮', () => {
    const wrapper = mount(Button, {
      props: { size: 'small' }
    });
    expect(wrapper.classes()).toContain('pure-button--small');
  });

  it('应该正确渲染禁用状态按钮', () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    expect(wrapper.classes()).toContain('pure-button--disabled');
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('应该正确渲染加载状态按钮', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    });
    expect(wrapper.classes()).toContain('pure-button--loading');
    expect(wrapper.find('.pure-button__loading').exists()).toBe(true);
  });

  it('应该正确渲染块级按钮', () => {
    const wrapper = mount(Button, {
      props: { block: true }
    });
    expect(wrapper.classes()).toContain('pure-button--block');
  });

  it('应该正确触发点击事件', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('禁用状态下不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('加载状态下不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('应该正确渲染自定义内容', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '自定义按钮文本'
      }
    });
    expect(wrapper.text()).toBe('自定义按钮文本');
  });

  it('应该正确渲染图标和文本', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span>🎉</span><span>图标按钮</span>'
      }
    });
    expect(wrapper.html()).toContain('🎉');
    expect(wrapper.html()).toContain('图标按钮');
  });
});
