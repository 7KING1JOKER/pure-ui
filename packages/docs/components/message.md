# Message 消息

Message 组件用于显示全局的通知消息，支持多种类型和自定义配置。

## 基本用法

### 消息类型

Message 组件提供了多种消息类型，包括默认、主要、成功、错误、警告和信息。

```vue
<template>
  <div class="message-group">
    <Button type="default" @click="showMessage('default')">默认消息</Button>
    <Button type="primary" @click="showMessage('primary')">主要消息</Button>
    <Button type="success" @click="showMessage('success')">成功消息</Button>
    <Button type="danger" @click="showMessage('error')">错误消息</Button>
    <Button type="warning" @click="showMessage('warning')">警告消息</Button>
    <Button type="info" @click="showMessage('info')">信息消息</Button>
  </div>
</template>

<script setup>
import { message } from '@pure-ui/core'

const showMessage = (type) => {
  const messages = {
    default: '默认消息',
    primary: '主要消息',
    success: '操作成功！',
    error: '操作失败！',
    warning: '请注意！',
    info: '提示信息'
  }
  
  message[type](messages[type], {
    duration: 3000,
    offset: 20,
    showClose: true
  })
}
</script>
```

### 函数式调用

Message 组件主要通过函数式 API 调用，支持以下方法：

- `message.default(message, options)`：显示默认消息
- `message.primary(message, options)`：显示主要消息
- `message.success(message, options)`：显示成功消息
- `message.error(message, options)`：显示错误消息
- `message.warning(message, options)`：显示警告消息
- `message.info(message, options)`：显示信息消息

### 配置选项

| 选项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `duration` | `number` | `3000` | 消息显示时长（毫秒），设置为 0 则不会自动关闭 |
| `offset` | `number` | `20` | 消息距离顶部的偏移量（像素） |
| `showClose` | `boolean` | `false` | 是否显示关闭按钮 |

### 示例

#### 带关闭按钮的消息

```javascript
message.success('操作成功！', {
  showClose: true
})
```

#### 自定义显示时长

```javascript
message.error('操作失败！', {
  duration: 5000 // 显示 5 秒
})
```

#### 自定义偏移量

```javascript
message.warning('请注意！', {
  offset: 40 // 距离顶部 40px
})
```

#### 不自动关闭的消息

```javascript
message.info('提示信息', {
  duration: 0 // 不会自动关闭
})
```

## 注意事项

1. **消息堆叠**：当同时显示多条消息时，它们会自动堆叠排列，每条消息之间有 50px 的间距。

2. **鼠标悬停**：鼠标悬停在消息上时，会暂停自动关闭计时器；鼠标移开后，计时器会继续。

3. **动画效果**：消息的显示和隐藏都有平滑的动画效果，关闭时会等待动画完成后再移除 DOM 元素。

4. **类型安全**：Message 组件提供了完整的 TypeScript 类型支持，可以获得良好的类型提示。
