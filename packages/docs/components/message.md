# Message 消息

Message 组件用于显示全局的通知消息，支持自定义配置。

## 基本用法

<script setup>
import { pureMessage, PureButton } from '@pure-ui/core'

const showMessage = () => {
  pureMessage.default('这是一条消息', {
    duration: 3000,
    offset: 20,
    showClose: true
  })
}
</script>

### 基本消息

Message 组件通过函数式 API 调用。

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
  <pure-button @click="showMessage">显示消息</pure-button>
</div>

```vue
<template>
  <div class="message-group">
    <pure-button @click="showMessage">显示消息</pure-button>
  </div>
</template>

<script setup>
import { pureMessage } from '@pure-ui/core'

const showMessage = () => {
  pureMessage.default('这是一条消息', {
    duration: 3000,
    offset: 20,
    showClose: true
  })
}
</script>
```

### 函数式调用

Message 组件主要通过函数式 API 调用，支持以下方法：

- `pureMessage.default(message, options)`：显示消息

### 配置选项

| 选项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `duration` | `number` | `3000` | 消息显示时长（毫秒），设置为 0 则不会自动关闭 |
| `offset` | `number` | `20` | 消息距离顶部的偏移量（像素） |
| `showClose` | `boolean` | `false` | 是否显示关闭按钮 |

### 示例

#### 带关闭按钮的消息

```javascript
pureMessage.default('操作成功！', {
  showClose: true
})
```

#### 自定义显示时长

```javascript
pureMessage.default('操作失败！', {
  duration: 5000 // 显示 5 秒
})
```

#### 自定义偏移量

```javascript
pureMessage.default('请注意！', {
  offset: 40 // 距离顶部 40px
})
```

#### 不自动关闭的消息

```javascript
pureMessage.default('提示信息', {
  duration: 0 // 不会自动关闭
})
```

## API

### 函数式调用

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `pureMessage.default(message, options)` | 显示消息 | `message: string`：消息内容<br>`options: Omit<MessageOptions, 'message'>`：配置选项 | `MessageInstance`：消息实例 |
| `pureMessage.closeAll()` | 关闭所有消息 | 无 | `void` |
| `pureMessage.clearInstances()` | 清除所有消息实例记录 | 无 | `void` |

### 配置选项

| 选项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `duration` | `number` | `3000` | 消息显示时长（毫秒），设置为 0 则不会自动关闭 |
| `offset` | `number` | `20` | 消息距离顶部的偏移量（像素） |
| `showClose` | `boolean` | `false` | 是否显示关闭按钮 |
| `onClose` | `() => void` | `undefined` | 消息关闭后的回调函数 |

### 类型定义

```typescript
// 消息选项类型
interface MessageOptions {
  message: string
  duration?: number
  offset?: number
  showClose?: boolean
}

// 消息实例类型
interface MessageInstance {
  container: HTMLElement
  offset: number
}
```

## 注意事项

1. **消息堆叠**：当同时显示多条消息时，它们会自动堆叠排列，每条消息之间有 50px 的间距。

2. **鼠标悬停**：鼠标悬停在消息上时，会暂停自动关闭计时器；鼠标移开后，计时器会继续。

3. **动画效果**：消息的显示和隐藏都有平滑的动画效果，关闭时会等待动画完成后再移除 DOM 元素。

4. **类型安全**：Message 组件提供了完整的 TypeScript 类型支持，可以获得良好的类型提示。

## 自定义样式

为了确保消息组件在不同环境中的显示效果一致，你可以通过以下方式自定义消息样式：

### 覆盖 CSS 变量

```css
:root {
  /* 主要颜色 */
  --color-primary: #409eff;
  --color-primary-light: #ecf5ff;
  
  /* 成功颜色 */
  --color-success: #67c23a;
  --color-success-light: #f0f9ff;
  
  /* 警告颜色 */
  --color-warning: #e6a23c;
  --color-warning-light: #fdf6ec;
  
  /* 错误颜色 */
  --color-danger: #f56c6c;
  --color-danger-light: #fef0f0;
  
  /* 信息颜色 */
  --color-info: #909399;
  --color-info-light: #f4f4f5;
}
```

### 全局样式覆盖

```css
/* 自定义消息容器样式 */
.pure-message--container {
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

/* 自定义消息文本样式 */
.pure-message--text {
  font-size: 14px !important;
  line-height: 1.5 !important;
}

/* 自定义消息图标样式 */
.pure-message--icon {
  font-size: 18px !important;
  margin-right: 12px !important;
}

/* 自定义关闭按钮样式 */
.pure-message--close {
  font-size: 16px !important;
  cursor: pointer !important;
}

.pure-message--close:hover {
  color: var(--color-primary) !important;
}
```

### 动画效果

消息组件使用了以下动画效果：

- **进入动画**：从上方淡入并轻微向下移动
- **离开动画**：向上淡出并轻微向上移动
- **悬停效果**：鼠标悬停时暂停自动关闭

这些动画效果可以通过修改 CSS 关键帧来自定义。
