<template>
  <Transition 
    name="message" 
    appear
    @after-leave="handleAfterLeave"
  >
    <div 
      v-if="visible" 
      :class="[
        'pure-message--container',
        `pure-message--${type}`
      ]"
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
        <div v-if="showClose" class="pure-message--close" @click="handleClose">
          ✕
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const emit = defineEmits(['close']);

interface MessageProps {
  message: string;
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  offset?: number;
  showClose?: boolean;
  visible?: boolean;
  onClose?: () => void;
}

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'default',
  duration: 3000,
  offset: 20,
  showClose: false,
  visible: true
});

const visible = ref(props.visible);
let timer: number | null = null;

function startTimer() {
  if (props.duration > 0) {
    timer = window.setTimeout(() => {
      handleClose();
    }, props.duration);
  }
}

function clearTimer() {
  if (timer !== null) {
    clearTimeout(timer);
    timer = null;
  }
}

function handleClose() {
  clearTimer();
  visible.value = false;
}

function handleAfterLeave() {
  emit('close');
  if (props.onClose) {
    props.onClose();
  }
}

function handleMouseEnter() {
  clearTimer();
}

function handleMouseLeave() {
  startTimer();
}

watch(() => props.visible, (newVal) => {
  visible.value = newVal;
});

onMounted(() => {
  startTimer();
});
</script>

<style scoped>
.pure-message--container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  height: 15px;
  min-width: 250px;
  max-width: 350px;
  padding: 12px 20px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #00000034;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pure-message--default {
  background-color: #ffffff;
  color: #121314;
}

.pure-message--primary {
  background-color: #ecf5ff;
  color: #409eff;
}

.pure-message--success {
  background-color: #f0f9ff;
  color: #67c23a;
}

.pure-message--error {
  background-color: #fef0f0;
  color: #f56c6c;
}

.pure-message--warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}

.pure-message--info {
  background-color: #f4f4f5;
  color: #909399;
}

.pure-message--content {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  line-height: 1.5;
}

.pure-message--icon {
  font-size: 16px;
  flex-shrink: 0;
  order: 1;
}

.pure-message--text {
  flex: 1;
  order: 2;
}

.pure-message--close {
  cursor: pointer;
  color: #909399;
  font-size: 14px;
  flex-shrink: 0;
  transition: color 0.3s;
  padding: 4px;
  order: 3;
}

.pure-message--close:hover {
  color: #409eff;
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
  animation: messageFadeIn 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.message-leave-active {
  animation: messageFadeOut 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>
