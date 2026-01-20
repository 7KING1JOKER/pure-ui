<template>
  <button 
    :class="[
      'pure-button',
      `pure-button--${type}`,
      `pure-button--${size}`,
      { 'pure-button--disabled': disabled },
      { 'pure-button--loading': loading },
      { 'pure-button--block': block }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="pure-button__loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

// Button 组件属性类型定义
interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

// Button 组件属性默认值
withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false
});

// Button 组件事件定义
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

// 点击事件处理函数
const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped>
.pure-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.pure-button--default {
  background-color: var(--color-white);
  color: var(--color-black);
}

.pure-button--default:hover {
  background-color: var(--color-disabled-bg);
}

.pure-button--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.pure-button--primary:hover {
  background-color: var(--color-primary-hover);
}

.pure-button--success {
  background-color: var(--color-success);
  color: rgba(0, 0, 0, 0.4);
}

.pure-button--success:hover {
  background-color: var(--color-success-hover);
}

.pure-button--warning {
  background-color: var(--color-warning);
  color: var(--color-white);
}

.pure-button--warning:hover {
  background-color: var(--color-warning-hover);
}

.pure-button--danger {
  background-color: var(--color-danger);
  color: var(--color-white);
}

.pure-button--danger:hover {
  background-color: var(--color-danger-hover);
}

.pure-button--info {
  background-color: var(--color-info);
  color: var(--color-white);
}

.pure-button--info:hover {
  background-color: var(--color-info-hover);
}

.pure-button--large {
  font-size: var(--font-size-large);
  padding: var(--spacing-sm) var(--spacing-xl);
}

.pure-button--medium {
  font-size: var(--font-size-medium);
  padding: var(--spacing-xs) var(--spacing-lg);
}

.pure-button--small {
  font-size: var(--font-size-small);
  padding: var(--spacing-xs) var(--spacing-md);
}

.pure-button--disabled,
.pure-button--disabled:hover {
  background-color: var(--color-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

.pure-button--loading {
  cursor: not-allowed;
  opacity: 0.6;
}

.pure-button__loading {
  margin-right: var(--spacing-xs);
  animation: spin 1s linear infinite;
}

.pure-button--block {
  display: flex;
  width: 100%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
