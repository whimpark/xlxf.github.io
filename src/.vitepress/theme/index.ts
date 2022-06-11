// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'

// 导入主题样式 
import '/public/css/index.css'
 
export default {
  ...DefaultTheme,
  NotFound: NotFound,
  enhanceApp({ app }) {
  
  }
}