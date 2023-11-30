// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import AdComponent from './AdComponent.vue'

import MyLayout from '../../../../docs/.vitepress/theme/MyLayout.vue'


export default {
  // ...DefaultTheme,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     // 'doc-before': () => h(GoogleAdSense)
  //     'doc-before': () => h(AdComponent)
  //   })
  // }
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout

}
