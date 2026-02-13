import { createApp } from 'vue'
import Message from './Message.vue'

interface MessageOptions {
  message: string
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
  const { message, duration = 3000, offset = 20, showClose = false } = options

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
  default(message: string, options?: Omit<MessageOptions, 'message'>) {
    return createMessage({ message, ...options })
  },
  closeAll() {
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
