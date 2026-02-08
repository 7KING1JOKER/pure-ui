import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Button } from '@pure-ui/core'
import '@pure-ui/dist/core.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Button', Button)
  }
}

export default theme
