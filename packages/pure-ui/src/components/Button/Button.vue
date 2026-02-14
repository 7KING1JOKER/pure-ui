<template>
  <button
    ref="buttonRef"
    :class="[
      'pure-button',
      `pure-button--${size}`,
      { 'pure-button--disabled': disabled },
      { 'pure-button--loading': loading },
      { 'pure-button--block': block },
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
    @mousedown="createRipple"
  >
    <span v-if="loading" class="pure-button__loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </span>
    <div class="ripples"></div>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

// Button 组件属性类型定义
interface ButtonProps {
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  loading?: boolean
  block?: boolean
}

// Button 组件属性默认值
const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  disabled: false,
  loading: false,
  block: false,
})

// Button 组件选项配置
defineOptions({
  name: 'pure-button',
})

// Button 组件事件定义
const emit = defineEmits<{
  (_e: 'click', _event: MouseEvent): void
}>()

// 点击事件处理函数
const handleClick = (e: MouseEvent) => {
  emit('click', e)
}

// 按钮元素引用
// eslint-disable-next-line no-undef
const buttonRef = ref<HTMLButtonElement | null>(null)

// 创建波纹效果函数
const createRipple = (e: MouseEvent) => {
  if(props.disabled || props.loading) return

  const clientX = e.clientX
  const clientY = e.clientY

  // 获取按钮元素的位置信息
  const target = buttonRef.value
  if(!target) return
  const rect = target.getBoundingClientRect()
  const top = rect.top
  const left = rect.left
  const width = rect.width
  const offsetX = clientX - left
  const offsetY = clientY - top

  // 创建波纹元素(使用按钮宽度作为直径)
  const $ripple = makeRipple({
    top: offsetY - ( width / 2 ),
    left: offsetX - ( width / 2 ),
    width: width,
    height: width,
  });

  const $ripples = target.querySelector('.ripples')
  if(!$ripples) return
  $ripples.appendChild($ripple)

  // 移除隐藏类名,添加按下类名,触发动画
  nextTick( () => {
    $ripple.classList.remove('is-hidden')
    $ripple.classList.add('is-pressed')
  } );
}

function makeRipple({ top, left, width, height }: { top: number, left: number, width: number, height: number }) {
  const $ripple = document.createElement('div')
  
  $ripple.style.cssText = `
    top: ${ top }px; 
    left: ${ left }px; 
    width: ${ width }px; 
    height: ${ height }px; 
    background-color: rgba(0, 0, 0, 0.2);
  `
  $ripple.className = 'pure-button__ripple is-hidden'
  return $ripple
}

</script>

<style scoped>
.pure-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
  background-color: var(--color-white);
  color: var(--color-black);
}

.pure-button:hover {
  background-color: var(--color-border-dark);
}

.pure-button:active {
  box-shadow: var(--shadow-button-clicked);
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

.pure-button--disabled {
  background-color: var(--color-disabled-bg);
  cursor: not-allowed;
  opacity: 0.6;
}

.pure-button--disabled:hover {
  background-color: var(--color-disabled-bg);
}

.pure-button--loading {
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 波纹效果容器 */
.ripples {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}
</style>

<style>
/* 波纹效果 - 非 scoped 样式，确保动态创建的元素能够应用样式 */
.pure-button .pure-button__ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  pointer-events: none;
}

.pure-button .is-hidden {
  opacity: 0;
}

.pure-button .is-pressed {
  animation: pureButtonRipple 0.6s linear forwards;
}

@keyframes pureButtonRipple {
  from {
    opacity: 1;
    transform: scale(0);
  }

  to {
    opacity: 0;
    transform: scale(2.5);
  }
}
</style>