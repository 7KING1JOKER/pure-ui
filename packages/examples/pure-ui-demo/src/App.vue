<template>
  <div class="demo-container" style="background-color: rgba(0, 0, 0, 0.2);">
    <h1>Pure-UI Button 组件示例</h1>
    
    <section class="demo-section">
      <h2>按钮类型</h2>
      <div class="button-group">
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="info">Info</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>按钮尺寸</h2>
      <div class="button-group">
        <Button type="primary" size="large">Large</Button>
        <Button type="primary" size="medium">Medium</Button>
        <Button type="primary" size="small">Small</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="button-group">
        <Button type="primary" :disabled="true">Disabled</Button>
        <Button type="success" :disabled="true">Disabled</Button>
        <Button type="danger" :disabled="true">Disabled</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>加载状态</h2>
      <div class="button-group">
        <Button type="primary" :loading="true">Loading</Button>
        <Button type="success" :loading="true">Loading</Button>
        <Button type="danger" :loading="true">Loading</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>块级按钮</h2>
      <div class="button-group">
        <Button type="primary" :block="true">Block Button</Button>
      </div>
    </section>

    <section class="demo-section">
      <h2>点击事件</h2>
      <div class="button-group">
        <Button type="primary" @click="handleClick">Click Me</Button>
      </div>
      <p v-if="clickCount > 0" class="click-info">
        按钮被点击了 {{ clickCount }} 次
      </p>
    </section>

    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="button-group">
        <Button type="primary">
          <span>🎉</span>
          <span>Custom Content</span>
        </Button>
        <Button type="success">
          <span>✅</span>
          <span>Success</span>
        </Button>
      </div>
    </section>

    <h1>Pure-UI Card 组件示例</h1>
    <section class="demo-section">
      <h2>Card - 垂直布局（col）</h2>
      <div class="card-group">
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
      </div>
    </section>

    <section class="demo-section">
      <h2>Card - 水平布局（row）</h2>
      <div class="card-group">
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

        <Card type="row" :shadow="true" :bordered="false">
          <template #left>
            <div class="card-left-content">
              <h4>无框左侧</h4>
            </div>
          </template>
          <template #default>
            <div class="card-main-content">
              <h4>无边框主内容</h4>
              <p>这个卡片没有边框，但有阴影效果。</p>
            </div>
          </template>
          <template #right>
            <div class="card-right-content">
              <h4>无框右侧</h4>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <section class="demo-section">
      <h2>Card - 样式组合</h2>
      <div class="card-group">
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
      </div>
    </section>

    <section class="demo-section">
      <h2>Card - 可选插槽（垂直布局）</h2>
      <div class="card-group">
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

        <Card type="col" :shadow="true" :bordered="true">
          <template #header>
            <h3>完整卡片</h3>
          </template>
          <template #default>
            <p>这个卡片包含 header、body 和 footer 三个部分。</p>
          </template>
          <template #footer>
            <Button type="primary" size="small">操作</Button>
          </template>
        </Card>
      </div>
    </section>

    <section class="demo-section">
      <h2>Card - 可选插槽（水平布局）</h2>
      <div class="card-group">
        <Card type="row" :shadow="true" :bordered="true">
          <template #default>
            <div class="card-main-content">
              <h4>只有 Body</h4>
              <p>这个卡片只有 body，没有 left 和 right。</p>
            </div>
          </template>
        </Card>

        <Card type="row" :shadow="true" :bordered="true">
          <template #left>
            <div class="card-left-content">
              <h4>左侧栏</h4>
              <p>侧边栏内容</p>
            </div>
          </template>
          <template #default>
            <div class="card-main-content">
              <h4>Left + Body</h4>
              <p>这个卡片有 left 和 body，没有 right。</p>
            </div>
          </template>
        </Card>

        <Card type="row" :shadow="true" :bordered="true">
          <template #default>
            <div class="card-main-content">
              <h4>Body + Right</h4>
              <p>这个卡片有 body 和 right，没有 left。</p>
            </div>
          </template>
          <template #right>
            <div class="card-right-content">
              <h4>右侧栏</h4>
              <p>侧边栏内容</p>
            </div>
          </template>
        </Card>

        <Card type="row" :shadow="true" :bordered="true">
          <template #left>
            <div class="card-left-content">
              <h4>完整左侧</h4>
              <p>侧边栏内容</p>
            </div>
          </template>
          <template #default>
            <div class="card-main-content">
              <h4>完整卡片</h4>
              <p>这个卡片包含 left、body 和 right 三个部分。</p>
            </div>
          </template>
          <template #right>
            <div class="card-right-content">
              <h4>完整右侧</h4>
              <p>侧边栏内容</p>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <section class="demo-section">
      <h2>Card - 鼠标悬停效果</h2>
      <div class="card-group">
        <Card type="col" :shadow="true" :bordered="true" :hovered="true">
          <template #header>
            <h3>悬停卡片</h3>
          </template>
          <template #default>
            <p>鼠标悬停时会有轻微的.translateY(-2px)效果。</p>
          </template>
        </Card>
      </div>
    </section>

    <h1>Pure-UI Message 组件示例</h1>
    <section class="demo-section">
      <h2>Message - 消息提示</h2>
      <div class="message-group">
        <Button type="default" @click="showMessage('default')">默认消息</Button>
        <Button type="primary" @click="showMessage('primary')">主要消息</Button>
        <Button type="success" @click="showMessage('success')">成功消息</Button>
        <Button type="danger" @click="showMessage('error')">错误消息</Button>
        <Button type="warning" @click="showMessage('warning')">警告消息</Button>
        <Button type="info" @click="showMessage('info')">信息消息</Button>
      </div>
      <p class="message-info">
        点击按钮显示不同类型的消息提示，鼠标悬停时停止计时器，移开后继续计时。
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Card, message } from '@pure-ui/core';

const clickCount = ref(0);

const handleClick = () => {
  clickCount.value++;
  console.log('Button clicked!', clickCount.value);
};

const showMessage = (type: 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info') => {
  const messages = {
    default: '默认消息',
    primary: '主要消息',
    success: '操作成功！',
    error: '操作失败！',
    warning: '请注意！',
    info: '提示信息'
  };
  
  const messageText = messages[type];
  
  // 动态访问 message 组件方法
  message[type](messageText, {
    duration: 3000,
    offset: 20,
    showClose: true
  });
};
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 32px;
}

.demo-section {
  margin-bottom: 40px;
  padding: 24px;
  background: #f5f7fa;
  border-radius: 8px;
}

.demo-section h2 {
  margin: 0 0 20px 0;
  color: #606266;
  font-size: 18px;
  font-weight: 600;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.button-group .pure-button {
  margin: 0;
}

.card-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card-group .pure-card {
  flex: 1;
  min-width: 300px;
}

.card-left-content,
.card-main-content,
.card-right-content {
  padding: 10px;
}

.card-left-content h4,
.card-main-content h4,
.card-right-content h4 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 14px;
  font-weight: 600;
}

.card-left-content p,
.card-main-content p,
.card-right-content p {
  margin: 0 0 10px 0;
  color: #606266;
  font-size: 13px;
  line-height: 1.6;
}

.click-info {
  margin-top: 16px;
  color: #409eff;
  font-size: 14px;
}

.message-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.message-info {
  margin-top: 16px;
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}
</style>
