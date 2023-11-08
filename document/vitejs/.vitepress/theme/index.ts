import { h } from 'vue'
import Theme from 'vitepress/theme'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'
import WwAds from './components/WwAds.vue' 
import './styles/vars.css'
import './custom.css'



import MyLayout from '../../../../docs/.vitepress/theme/MyLayout.vue'


export default {
  extends: Theme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
  
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  }
}
