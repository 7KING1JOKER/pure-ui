<template>
  <div 
    :class="[
      'pure-card',
      `pure-card--${type}`,
      { 'pure-card--shadow': shadow },
      { 'pure-card--bordered': bordered },
      { 'pure-card--hovered': hovered }
    ]"
  >
    <div v-if="type === 'col' && $slots.header" class="pure-card__header">
      <slot name="header"></slot>
    </div>
    <div v-if="type === 'row' && $slots.left" class="pure-card__left">
      <slot name="left"></slot>
    </div>
    <div class="pure-card__body">
      <slot></slot>
    </div>
    <div v-if="type === 'col' && $slots.footer" class="pure-card__footer">
      <slot name="footer"></slot>
    </div>
    <div v-if="type === 'row' && $slots.right" class="pure-card__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

// Card 组件属性类型定义
interface CardProps {
  type?: 'col' | 'row';
  shadow?: boolean;
  bordered?: boolean;
  hovered?: boolean;
}

// Card 组件属性默认值
withDefaults(defineProps<CardProps>(), {
  type: 'col',
  shadow: false,
  bordered: true,
  hovered: false
});
</script>

<style scoped>
.pure-card {
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-base);
}

.pure-card--bordered {
  border: 1px solid var(--color-border);
}

.pure-card--shadow {
  box-shadow: var(--shadow-card);
}

.pure-card--col {
  display: flex;
  flex-direction: column;
}

.pure-card--row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.pure-card__header {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border-light);
  font-size: var(--font-size-large);
  font-weight: 600;
  color: #303133;
  background-color: var(--color-bg-secondary);
}

.pure-card__left {
  padding: var(--spacing-lg);
  border-right: 1px solid var(--color-border-light);
  background-color: var(--color-bg-secondary);
  min-width: 200px;
  flex-shrink: 0;
}

.pure-card__body {
  padding: var(--spacing-lg);
  flex: 1;
  min-height: 100px;
}

.pure-card__footer {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--color-border-light);
  background-color: var(--color-bg-secondary);
}

.pure-card__right {
  padding: var(--spacing-lg);
  border-left: 1px solid var(--color-border-light);
  background-color: var(--color-bg-secondary);
  min-width: 200px;
  flex-shrink: 0;
}

.pure-card--hovered:hover {
  transform: translateY(-2px);
  transition: all var(--transition-base) ease;
}
</style>
