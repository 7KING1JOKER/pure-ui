import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { PureButton, PureCard } from '@pure-ui/core'
// 先导入组件库样式
import '@pure-ui/dist/core.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PureButton', PureButton)
    app.component('PureCard', PureCard)
  }
}

export default theme