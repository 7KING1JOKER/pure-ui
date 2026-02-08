# Card 卡片

卡片是一种常用的容器组件，用于展示相关信息的集合。

## 基本用法

### 垂直布局（col）

默认情况下，Card 组件使用垂直布局，包含 header、body 和 footer 三个部分。

```vue
<Card type="col" :shadow="true" :bordered="true">
  <template #header>
    <h3>卡片标题</h3>
  </template>
  <template #default>
    <p>这是卡片的主要内容区域。可以放置任何内容，包括文本、图片、表单等。</p>
  </template>
  <template #footer>
    <Button type="primary" size="small">操作</Button>
  </template>
</Card>

<Card type="col" :shadow="false" :bordered="true">
  <template #header>
    <h3>无边框卡片</h3>
  </template>
  <template #default>
    <p>这个卡片没有阴影效果，但有边框。</p>
  </template>
</Card>
```

### 水平布局（row）

通过设置 `type="row"`，Card 组件可以使用水平布局，包含 left、center 和 right 三个部分。

```vue
<Card type="row" :shadow="true" :bordered="true">
  <template #left>
    <div class="card-left-content">
      <h4>左侧</h4>
      <p>侧边栏内容</p>
    </div>
  </template>
  <template #default>
    <div class="card-main-content">
      <h4>主内容</h4>
      <p>这是卡片的主要内容区域。</p>
      <p>可以放置大量的文本、图片或其他组件。</p>
    </div>
  </template>
  <template #right>
    <div class="card-right-content">
      <h4>右侧</h4>
      <p>侧边栏内容</p>
    </div>
  </template>
</Card>
```

### 样式组合

Card 组件支持多种样式组合，如阴影、边框等。

```vue
<Card type="col" :shadow="true" :bordered="true">
  <template #header>
    <h3>阴影 + 边框</h3>
  </template>
  <template #default>
    <p>同时显示阴影和边框的卡片。</p>
  </template>
</Card>

<Card type="col" :shadow="false" :bordered="false">
  <template #header>
    <h3>无阴影 + 无边框</h3>
  </template>
  <template #default>
    <p>简洁的卡片样式，没有阴影和边框。</p>
  </template>
</Card>

<Card type="col" :shadow="true" :bordered="false">
  <template #header>
    <h3>仅阴影</h3>
  </template>
  <template #default>
    <p>只有阴影效果的卡片。</p>
  </template>
</Card>
```

### 可选插槽（垂直布局）

Card 组件的插槽都是可选的，可以根据需要只使用部分插槽。

```vue
<Card type="col" :shadow="true" :bordered="true">
  <template #header>
    <h3>只有 Header</h3>
  </template>
  <template #default>
    <p>这个卡片只有 header 和 body，没有 footer。</p>
  </template>
</Card>

<Card type="col" :shadow="true" :bordered="true">
  <template #default>
    <p>这个卡片只有 body，没有 header 和 footer。</p>
  </template>
</Card>

<Card type="col" :shadow="true" :bordered="true">
  <template #default>
    <p>这个卡片只有 body 和 footer，没有 header。</p>
  </template>
  <template #footer>
    <Button type="primary" size="small">确认</Button>
  </template>
</Card>
```

### 鼠标悬停效果

通过设置 `:hovered="true"`，Card 组件可以在鼠标悬停时显示轻微的上浮效果。

```vue
<Card type="col" :shadow="true" :bordered="true" :hovered="true">
  <template #header>
    <h3>悬停卡片</h3>
  </template>
  <template #default>
    <p>鼠标悬停时会有轻微的.translateY(-2px)效果。</p>
  </template>
</Card>
```

## API

### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | `string` | `col` | 布局类型：`col`（垂直）、`row`（水平） |
| `shadow` | `boolean` | `false` | 是否显示阴影 |
| `bordered` | `boolean` | `false` | 是否显示边框 |
| `hovered` | `boolean` | `false` | 是否启用鼠标悬停效果 |

### 插槽

#### 垂直布局（type="col"）

| 插槽名 | 说明 |
| --- | --- |
| `header` | 卡片头部内容 |
| `default` | 卡片主体内容 |
| `footer` | 卡片底部内容 |

#### 水平布局（type="row"）

| 插槽名 | 说明 |
| --- | --- |
| `left` | 卡片左侧内容 |
| `default` | 卡片中间内容 |
| `right` | 卡片右侧内容 |
