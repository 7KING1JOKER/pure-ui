import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Pure-UI 组件库',
  description: '一个简洁、优雅的 Vue 3 组件库',
  base: '/',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/components/button'
      }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button 按钮',
              link: '/components/button'
            },
            {
              text: 'Card 卡片',
              link: '/components/card'
            },
            {
              text: 'Message 消息',
              link: '/components/message'
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/7KING1JOKER/pure-ui'
      }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@pure-ui/core': resolve(__dirname, '../../pure-ui/src'),
        '@pure-ui/dist': resolve(__dirname, '../../pure-ui/dist')
      }
    }
  }
})
