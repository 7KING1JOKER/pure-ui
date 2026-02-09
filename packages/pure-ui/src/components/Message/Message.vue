<template>
  <Transition name="message" appear >
    <div
      v-if="visible"
      :class="['pure-message--container', `pure-message--${type}`]"
      :style="{ top: offset + 'px' }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="pure-message--content">
        <div class="pure-message--icon">
          <span v-if="type === 'default'">ℹ️</span>
          <span v-else-if="type === 'primary'">🔵</span>
          <span v-else-if="type === 'success'">✅</span>
          <span v-else-if="type === 'error'">❌</span>
          <span v-else-if="type === 'warning'">⚠️</span>
          <span v-else>ℹ️</span>
        </div>
        <div class="pure-message--text">{{ message }}</div>
        <div v-if="showClose" class="pure-message--close" @click="handleClose">✕</div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const emit = defineEmits(['close'])

interface MessageProps {
  message: string
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info'
  duration?: number
  offset?: number
  showClose?: boolean
  visible?: boolean
  onClose?: () => void
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'default',
  duration: 3000,
  offset: 20,
  showClose: false,
  visible: true,
})

const visible = ref(props.visible)
let timer: number | null = null

function startTimer() {
  if (props.duration > 0) {
    timer = window.setTimeout(() => {
      handleClose()
    }, props.duration)
  }
}

function clearTimer() {
  if (timer !== null) {
    clearTimeout(timer)
    timer = null
  }
}

function handleClose() {
  clearTimer()
  emit('close')
  if (props.onClose) {
    props.onClose()
  }
  visible.value = false
}


function handleMouseEnter() {
  clearTimer()
}

function handleMouseLeave() {
  startTimer()
}

watch(
  () => props.visible,
  newVal => {
    visible.value = newVal
  }
)

onMounted(() => {
  startTimer()
})
</script>

<style scoped>
.pure-message--container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-index-message);
  height: 15px;
  min-width: 250px;
  max-width: 350px;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-sm);
  background-color: var(--color-white);
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pure-message--default {
  background-color: var(--color-white);
  color: var(--color-black);
}

.pure-message--primary {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
}

.pure-message--success {
  background-color: var(--color-success-light);
  color: var(--color-success);
}

.pure-message--error {
  background-color: var(--color-danger-light);
  color: var(--color-danger);
}

.pure-message--warning {
  background-color: var(--color-warning-light);
  color: var(--color-warning);
}

.pure-message--info {
  background-color: var(--color-info-light);
  color: var(--color-info);
}

.pure-message--content {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-medium);
  line-height: 1.5;
}

.pure-message--icon {
  font-size: var(--font-size-large);
  flex-shrink: 0;
  order: 1;
}

.pure-message--text {
  flex: 1;
  order: 2;
}

.pure-message--close {
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: var(--font-size-medium);
  flex-shrink: 0;
  transition: color var(--transition-base);
  padding: 4px;
  order: 3;
}

.pure-message--close:hover {
  color: var(--color-primary);
}

/* Message 动画样式 */
@keyframes messageFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes messageFadeOut {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
}

@keyframes messageSlideUp {
  from {
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
}

.message-enter-active {
  animation: messageFadeIn var(--transition-slow) cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.message-leave-active {
  animation: messageFadeOut var(--transition-slow) cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
