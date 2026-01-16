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
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}

.pure-card--bordered {
  border: 1px solid #dcdfe6;
}

.pure-card--shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
  padding: 16px 20px;
  border-bottom: 1px solid #ebeef5;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  background-color: #fafafa;
}

.pure-card__left {
  padding: 20px;
  border-right: 1px solid #ebeef5;
  background-color: #fafafa;
  min-width: 200px;
  flex-shrink: 0;
}

.pure-card__body {
  padding: 20px;
  flex: 1;
  min-height: 100px;
}

.pure-card__footer {
  padding: 16px 20px;
  border-top: 1px solid #ebeef5;
  background-color: #fafafa;
}

.pure-card__right {
  padding: 20px;
  border-left: 1px solid #ebeef5;
  background-color: #fafafa;
  min-width: 200px;
  flex-shrink: 0;
}

.pure-card--hovered:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
</style>
