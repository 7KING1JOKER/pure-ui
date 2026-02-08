# Button 按钮

按钮是最常用的交互元素之一，用于触发操作或提交表单。

## 基本用法

<script setup>
import { Button } from '@pure-ui/core'
import { ref } from 'vue'

const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
  console.log('Button clicked!', clickCount.value)
}
</script>

### 按钮类型

通过 `type` 属性设置按钮类型，支持 `default`、`primary`、`success`、`warning`、`danger`、`info` 六种类型。

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
  <Button type="default">Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button>
  <Button type="info">Info</Button>
</div>


```vue
<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button type="info">Info</Button>
```

### 按钮尺寸

通过 `size` 属性设置按钮尺寸，支持 `large`、`medium`、`small` 三种尺寸。

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
  <Button type="primary" size="large">Large</Button>
  <Button type="primary" size="medium">Medium</Button>
  <Button type="primary" size="small">Small</Button>
</div>

```vue
<Button type="primary" size="large">Large</Button>
<Button type="primary" size="medium">Medium</Button>
<Button type="primary" size="small">Small</Button>
```

### 禁用状态

通过 `disabled` 属性设置按钮禁用状态。

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
  <Button type="primary" :disabled="true">Disabled</Button>
  <Button type="success" :disabled="true">Disabled</Button>
  <Button type="danger" :disabled="true">Disabled</Button>
</div>

```vue
<Button type="primary" :disabled="true">Disabled</Button>
<Button type="success" :disabled="true">Disabled</Button>
<Button type="danger" :disabled="true">Disabled</Button>
```

### 加载状态

通过 `loading` 属性设置按钮加载状态。

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
  <Button type="primary" :loading="true">Loading</Button>
  <Button type="success" :loading="true">Loading</Button>
  <Button type="danger" :loading="true">Loading</Button>
</div>

```vue
<Button type="primary" :loading="true">Loading</Button>
<Button type="success" :loading="true">Loading</Button>
<Button type="danger" :loading="true">Loading</Button>
```

### 块级按钮

通过 `block` 属性设置按钮为块级元素，会占满整个父容器宽度。

<div style="width: 300px; margin: 16px 0;">
  <Button type="primary" :block="true">Block Button</Button>
</div>

```vue
<Button type="primary" :block="true">Block Button</Button>
```

### 点击事件

通过 `@click` 事件监听按钮点击。

<div style="margin: 16px 0;">
  <div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
    <Button type="primary" @click="handleClick">Click Me ({{ clickCount }})</Button>
  </div>
  <p v-if="clickCount > 0" style="margin-top: 12px;">
    按钮已被点击 {{ clickCount }} 次
  </p>
</div>

```vue
<Button type="primary" @click="handleClick">Click Me</Button>

<script setup>
const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 自定义内容

按钮支持自定义内容，如添加图标等。

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
  <Button type="primary">
    <span>🎉</span>
    <span>Custom Content</span>
  </Button>
  <Button type="success">
    <span>✅</span>
    <span>Success</span>
  </Button>
</div>

```vue
<Button type="primary">
  <span>🎉</span>
  <span>Custom Content</span>
</Button>
<Button type="success">
  <span>✅</span>
  <span>Success</span>
</Button>
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | `string` | `default` | 按钮类型：`default`、`primary`、`success`、`warning`、`danger`、`info` |
| `size` | `string` | `medium` | 按钮尺寸：`large`、`medium`、`small` |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `block` | `boolean` | `false` | 是否为块级按钮 |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击事件 | `MouseEvent` |
