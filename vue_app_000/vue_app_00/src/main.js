import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from "mint-ui"            //1.完整引入mint-ui库
import'mint-ui/lib/style.css'           //1
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import "./font/iconfont.css"            //4:引入图标字体样式文件
Vue.use(MintUI)                         //1.将MintUL注册给 vue实例     


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
