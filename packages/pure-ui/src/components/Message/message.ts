import { createApp } from 'vue';
import Message from './Message.vue';

interface MessageOptions {
  message: string;
  type?: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  offset?: number;
  showClose?: boolean;
}

const messageInstances: any[] = [];

function createMessage(options: MessageOptions) {
  const {
    message,
    type = 'default',
    duration = 3000,
    offset = 20,
    showClose = false
  } = options;

  const container = document.createElement('div');
  document.body.appendChild(container);

  const app = createApp(Message, {
    message,
    type,
    duration,
    offset: offset + messageInstances.length * 60,
    showClose,
    visible: true,
    onClose: () => {
      app.unmount();
      document.body.removeChild(container);
      const index = messageInstances.indexOf(container);
      if (index > -1) {
        messageInstances.splice(index, 1);
      }
    }
  });

  const instance = app.mount(container);
  messageInstances.push(container);

  return instance;
}

export default {
  default(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'default', ...options });
  },
  primary(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'primary', ...options });
  },
  success(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'success', ...options });
  },
  error(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'error', ...options });
  },
  warning(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'warning', ...options });
  },
  info(message: string, options?: Omit<MessageOptions, 'message' | 'type'>) {
    return createMessage({ message, type: 'info', ...options });
  }
};
