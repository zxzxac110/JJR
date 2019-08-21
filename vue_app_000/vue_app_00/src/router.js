import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Omg from "./components/Omg.vue"                                  //主界面 向
import myheader from "./components/Myheader.vue"                        //tou 向
import Reg from "./components/pro/Reg.vue"                              //注册 李
import Login from "./components/pro/Login.vue"                          //登录 李
import Agreement from "./components/pro/Agreement.vue"                  //申明协议 李
import Personal from "./components/pro/Personal.vue"                    //用户个人中心 李
import PersonalSet from "./components/pro/PersonalSet.vue"              //用户个人中心-设置 李
import PersonalDY from "./components/pro/PersonalDY.vue"                //用户个人中心-订阅 李
import PersonalCollect from "./components/pro/PersonalCollect.vue"      //用户个人中心-收藏 李
import PersonalResume from "./components/pro/PersonalResume.vue"        //用户个人中心-简历 李
import PersonalRecord from "./components/pro/PersonalRecord.vue"        //用户个人中心-应聘记录 李
import deta1 from "./components/pro/deta1.vue"                          //向
import compan from "./components/pro/compan.vue"                        //向
import Gagege from "./components/pro/Gagege.vue"                        //l罗
import Jbxx from "./components/pro/Jbxx.vue"                            //l罗
import qiuzhi from "./components/pro/Qiuzhi.vue"                        //l罗
import baby from "./components/pro/baby.vue"                        //l罗
//import mmfind from "./components/pro/mmfind.vue"                      //找回密码 李 未完成
Vue.use(Router) 
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/omg',component:Omg},
    {path:'/reg',component:Reg},
    {path:'/login',component:Login},
    {path:'/agreement',component:Agreement},
    {path:'/personal',component:Personal},
    {path:'/personalset',component:PersonalSet},
    {path:'/personaldy',component:PersonalDY},
    {path:'/personalcollect',component:PersonalCollect},
    {path:'/personalresume',component:PersonalResume},
    {path:'/personalrecord',component:PersonalRecord},
    {path:'/deta1',component:deta1},
    {path:'/compan',component:compan},
    {path:'/gagege',component:Gagege},
    {path:'/Jbxx',component:Jbxx},
    {path:'/myheader',component:myheader},
    {path:'/qiuzhi',component:qiuzhi},
    {path:'/baby',component:baby},
    //{path:'/mmfind',component:mmfind},
  ]
})
