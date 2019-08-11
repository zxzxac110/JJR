import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Omg from "./components/Omg.vue"                //主界面
import Login from "./components/pro/Login.vue"        //登录
import Reg from "./components/pro/Reg.vue"            //注册
import Agreement from "./components/pro/Agreement.vue"//申明协议
import Personal from "./components/pro/Personal.vue"  //用户个人中心
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Login',component:Login},
    {path:'/omg',component:Omg},
    {path:'/reg',component:Reg},
    {path:'/agreement',component:Agreement},
    {path:'/personal',component:Personal}
  ]
})
