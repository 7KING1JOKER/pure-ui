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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@pure-ui/core';

const clickCount = ref(0);

const handleClick = () => {
  clickCount.value++;
  console.log('Button clicked!', clickCount.value);
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

.click-info {
  margin-top: 16px;
  color: #409eff;
  font-size: 14px;
}
</style>
