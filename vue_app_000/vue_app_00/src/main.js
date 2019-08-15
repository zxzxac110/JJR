import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MintUI from "mint-ui"            //1.完整引入mint-ui库
import'mint-ui/lib/style.css'           //1.引入样式

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import "./font/iconfont.css"            //4:引入图标字体样式文件
Vue.use(MintUI)                         //1.将MintUL注册给 vue实例 
import axios from "axios"
axios.defaults.baseURL='http://127.0.0.1:3000/' //印象中已经打错了2次的单词了
axios.defaults.withCredentials=true    
Vue.prototype.axios=axios;
import qs from 'qs';
Vue.prototype.qs = qs;
import Vuex from "vuex"
Vue.use(Vuex)//注册vuex
var store=new Vuex.Store({//创建VUEX存储实例对象
    state:{cartCount:0},     //共享数据
    mutations:{           //添加修改数据函数
        increment(state){state.cartCount++},
        jian(state){state.cartCount--},
        clear(state){state.cartCount=0},
     }, 
     getters:{//添加获取数据函数
         getCartCount(state){
             return state.cartCount
         }
    },   
    actions:{}    //添加异步操作数据函数
 })

new Vue({
  router,
  render: h => h(App),
  //store
}).$mount('#app')
