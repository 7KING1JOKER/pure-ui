import { createApp } from 'vue'
import Message from './Message.vue'

interface MessageOptions {
  message: string
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info'
  duration?: number
  offset?: number
  showClose?: boolean
}

interface MessageInstance {
  container: HTMLElement
  offset: number
}

const messageInstances: MessageInstance[] = []

function createMessage(options: MessageOptions) {
  const { message, type = 'default', duration = 3000, offset = 20, showClose = false } = options

  const container = document.createElement('div')
  document.body.appendChild(container)

  let currentOffset: number
  if (messageInstances.length === 0) {
    currentOffset = offset
  } else {
    let pos = messageInstances.length - 1
    currentOffset = messageInstances[pos].offset + 50
  }

  const app = createApp(Message, {
    message,
    type,
    duration,
    offset: currentOffset,
    showClose,
    visible: true,
    onClose: () => {
      const index = messageInstances.findIndex(m => m.container === container)
      if (index > -1) {
        messageInstances.splice(index, 1)
      }
      setTimeout(() => {
        app.unmount()
        if (document.body.contains(container)) {
          document.body.removeChild(container)
        }
      }, 400)
    },
  })

  const instance = app.mount(container)
  messageInstances.push({ container, offset: currentOffset })

  return instance
}

export default {
  default(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'default', ...options })
  },
  primary(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'primary', ...options })
  },
  success(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'success', ...options })
  },
  error(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'error', ...options })
  },
  warning(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'warning', ...options })
  },
  info(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'info', ...options })
  },
  closeAll() {
    // 关闭所有消息实例
    messageInstances.forEach((instance) => {
      if (document.body.contains(instance.container)) {
        document.body.removeChild(instance.container)
      }
    })
    messageInstances.length = 0
  },
  clearInstances() {
    messageInstances.length = 0
  },
}
