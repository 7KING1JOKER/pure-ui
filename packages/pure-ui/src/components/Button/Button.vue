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

// 组件属性类型定义
interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

// 组件属性默认值
withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false
});

// 组件事件定义
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
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.pure-button--default {
  background-color: #ffffff;
  color: #121314;
}

.pure-button--default:hover {
  background-color: #0000000a;
}

.pure-button--primary {
  background-color: #409eff;
  color: #fff;
}

.pure-button--primary:hover {
  background-color: #66b1ff;
}

.pure-button--success {
  background-color: #67c23a;
  color: #fff;
}

.pure-button--success:hover {
  background-color: #85ce61;
}

.pure-button--warning {
  background-color: #e6a23c;
  color: #fff;
}

.pure-button--warning:hover {
  background-color: #ebb563;
}

.pure-button--danger {
  background-color: #f56c6c;
  color: #fff;
}

.pure-button--danger:hover {
  background-color: #f78989;
}

.pure-button--info {
  background-color: #909399;
  color: #fff;
}

.pure-button--info:hover {
  background-color: #a6a9ad;
}

.pure-button--large {
  font-size: 16px;
  padding: 12px 24px;
}

.pure-button--medium {
  font-size: 14px;
  padding: 10px 20px;
}

.pure-button--small {
  font-size: 12px;
  padding: 8px 16px;
}

.pure-button--disabled,
.pure-button--disabled:hover {
  background-color: #c0c4cc;
  cursor: not-allowed;
  opacity: 0.6;
}

.pure-button--loading {
  cursor: not-allowed;
  opacity: 0.6;
}

.pure-button__loading {
  margin-right: 8px;
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
