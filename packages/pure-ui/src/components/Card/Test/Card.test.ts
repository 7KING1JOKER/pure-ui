import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '../Card.vue';

describe('Card 组件', () => {
  it('应该正确渲染默认卡片', () => {
    const wrapper = mount(Card);
    expect(wrapper.classes()).toContain('pure-card');
    expect(wrapper.classes()).toContain('pure-card--col');
    expect(wrapper.classes()).toContain('pure-card--bordered');
  });

  it('应该正确渲染垂直布局卡片', () => {
    const wrapper = mount(Card, {
      props: { type: 'col' }
    });
    expect(wrapper.classes()).toContain('pure-card--col');
  });

  it('应该正确渲染水平布局卡片', () => {
    const wrapper = mount(Card, {
      props: { type: 'row' }
    });
    expect(wrapper.classes()).toContain('pure-card--row');
  });

  it('应该正确渲染带阴影的卡片', () => {
    const wrapper = mount(Card, {
      props: { shadow: true }
    });
    expect(wrapper.classes()).toContain('pure-card--shadow');
  });

  it('应该正确渲染带边框的卡片', () => {
    const wrapper = mount(Card, {
      props: { bordered: true }
    });
    expect(wrapper.classes()).toContain('pure-card--bordered');
  });

  it('应该正确渲染无边框的卡片', () => {
    const wrapper = mount(Card, {
      props: { bordered: false }
    });
    expect(wrapper.classes()).not.toContain('pure-card--bordered');
  });

  it('应该正确渲染带悬停效果的卡片', () => {
    const wrapper = mount(Card, {
      props: { hovered: true }
    });
    expect(wrapper.classes()).toContain('pure-card--hovered');
  });

  it('应该正确渲染 header 插槽（垂直布局）', () => {
    const wrapper = mount(Card, {
      props: { type: 'col' },
      slots: {
        header: '<h3>卡片标题</h3>'
      }
    });
    expect(wrapper.find('.pure-card__header').exists()).toBe(true);
    expect(wrapper.find('.pure-card__header').text()).toBe('卡片标题');
  });

  it('应该正确渲染 footer 插槽（垂直布局）', () => {
    const wrapper = mount(Card, {
      props: { type: 'col' },
      slots: {
        footer: '<button>操作</button>'
      }
    });
    expect(wrapper.find('.pure-card__footer').exists()).toBe(true);
  });

  it('应该正确渲染 left 插槽（水平布局）', () => {
    const wrapper = mount(Card, {
      props: { type: 'row' },
      slots: {
        left: '<div>左侧内容</div>'
      }
    });
    expect(wrapper.find('.pure-card__left').exists()).toBe(true);
  });

  it('应该正确渲染 right 插槽（水平布局）', () => {
    const wrapper = mount(Card, {
      props: { type: 'row' },
      slots: {
        right: '<div>右侧内容</div>'
      }
    });
    expect(wrapper.find('.pure-card__right').exists()).toBe(true);
  });

  it('应该正确渲染默认内容', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p>卡片内容</p>'
      }
    });
    expect(wrapper.find('.pure-card__body').exists()).toBe(true);
    expect(wrapper.find('.pure-card__body').text()).toBe('卡片内容');
  });

  it('垂直布局时不应该渲染 left 和 right 插槽', () => {
    const wrapper = mount(Card, {
      props: { type: 'col' },
      slots: {
        left: '<div>左侧</div>',
        right: '<div>右侧</div>'
      }
    });
    expect(wrapper.find('.pure-card__left').exists()).toBe(false);
    expect(wrapper.find('.pure-card__right').exists()).toBe(false);
  });

  it('水平布局时不应该渲染 header 和 footer 插槽', () => {
    const wrapper = mount(Card, {
      props: { type: 'row' },
      slots: {
        header: '<h3>标题</h3>',
        footer: '<button>操作</button>'
      }
    });
    expect(wrapper.find('.pure-card__header').exists()).toBe(false);
    expect(wrapper.find('.pure-card__footer').exists()).toBe(false);
  });

  it('应该正确渲染完整的垂直布局卡片', () => {
    const wrapper = mount(Card, {
      props: { type: 'col', shadow: true, bordered: true },
      slots: {
        header: '<h3>标题</h3>',
        default: '<p>内容</p>',
        footer: '<button>操作</button>'
      }
    });
    expect(wrapper.classes()).toContain('pure-card--col');
    expect(wrapper.classes()).toContain('pure-card--shadow');
    expect(wrapper.classes()).toContain('pure-card--bordered');
    expect(wrapper.find('.pure-card__header').exists()).toBe(true);
    expect(wrapper.find('.pure-card__body').exists()).toBe(true);
    expect(wrapper.find('.pure-card__footer').exists()).toBe(true);
  });

  it('应该正确渲染完整的水平布局卡片', () => {
    const wrapper = mount(Card, {
      props: { type: 'row', shadow: true, bordered: true },
      slots: {
        left: '<div>左侧</div>',
        default: '<p>内容</p>',
        right: '<div>右侧</div>'
      }
    });
    expect(wrapper.classes()).toContain('pure-card--row');
    expect(wrapper.classes()).toContain('pure-card--shadow');
    expect(wrapper.classes()).toContain('pure-card--bordered');
    expect(wrapper.find('.pure-card__left').exists()).toBe(true);
    expect(wrapper.find('.pure-card__body').exists()).toBe(true);
    expect(wrapper.find('.pure-card__right').exists()).toBe(true);
  });

  it('应该正确渲染只有 body 的卡片', () => {
    const wrapper = mount(Card, {
      props: { type: 'col' },
      slots: {
        default: '<p>只有内容</p>'
      }
    });
    expect(wrapper.find('.pure-card__body').exists()).toBe(true);
    expect(wrapper.find('.pure-card__header').exists()).toBe(false);
    expect(wrapper.find('.pure-card__footer').exists()).toBe(false);
  });
});
