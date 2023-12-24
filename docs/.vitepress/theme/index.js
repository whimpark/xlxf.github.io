// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

import qrcode from '../../../src/components/qrcode.vue'

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('qrcode', qrcode)
  }
}

