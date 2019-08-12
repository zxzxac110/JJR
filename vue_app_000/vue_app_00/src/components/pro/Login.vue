<template>
    <!--Login 注册页面 -->
    <div class="text-center login">
        <div class="loginD-none">
            <div><span :class="spanswitch?spanDefault:null"  @click="per('ym')">账号登录</span></div>
            <div><span :class="!spanswitch?spanDefault:null" @click="per('sms')">短信验证码登录</span></div>
        </div>
<mt-tab-container v-model="active" >
        <mt-tab-container-item id="ym">
          <!-- 账号密码登录 -->
          <loginym></loginym>
        </mt-tab-container-item> 
        <mt-tab-container-item id="sms">
          <!-- 短信验证码登录 -->
          <loginsms></loginsms>
        </mt-tab-container-item>
</mt-tab-container>
        <div class="text-right">忘记密码</div>
        <mt-button  @click="login" class="tlogin">登录</mt-button>
        <mt-button  @click="reg" class="treg" >注册</mt-button>
        <div class="qylogin">企业用户登录</div>     
        <div class="text-center mb-20" >
            <div class="sigma-middle-line">
                <span class="sigma-line-text">其他登录方式</span>
            </div>
        </div>  
        <div class="Other-login">
            <div>
                <img src="../../assets/qq.png" alt=""> 
                <div>QQ登陆</div> 
            </div>
            <div>
                <img src="../../assets/wx.png" alt=""> 
                <div>微信登录</div>          
            </div>
            <div >
                <img src="../../assets/wb.png" alt="">    
                <div>微博登录</div>
            </div>           
        </div>
    </div>
</template>
<script>
import loginym from "./LoginYM"
import loginsms from "./LoginSMS"
export default {
   data(){
        return{
            //登陆方式变量
            spanswitch:"true",
            spanDefault:"active",
            active:"ym",
            uname:"",
            upwd:"",
            uyzm:""
        }
    },
    methods:{
        login(){console.log(this.uname)},
        reg(){console.log(this.upwd)},
        per(sur){//登陆方式函数
            this.active=sur;
            this.spanswitch=!(this.spanswitch)
        }
    },
    components:{
        loginym,
        loginsms
    },
}
</script>
<style scoped>
@import url("../../css/loginReg.css");
</style>
