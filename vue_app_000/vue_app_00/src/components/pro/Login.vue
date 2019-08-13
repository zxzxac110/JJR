<template>
    <!--Login 注册页面 -->
    <div class="text-center login">
        <div class="loginD-none">
            <div><span :class="spanswitch?spanDefault:null"  @click="per('ym')">账号登录</span></div>
            <div><span :class="!spanswitch?spanDefault:null" @click="per('sms')">短信验证码登录</span>
            </div>
        </div>
<mt-tab-container v-model="active" >
        <mt-tab-container-item id="ym">
          <!-- 账号密码登录 -->
          <loginym @changeUrl="getUrl"></loginym>
        </mt-tab-container-item> 
        <mt-tab-container-item id="sms">
          <!-- 短信验证码登录 -->
          <loginsms :yzmspan="yzmspan" :Yzm="Yzm" :smsColor="smsColor" @yzmfun="getUrl"></loginsms>
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
                <!-- <img src="../../assets/qq.png" alt="">  -->
                <div class="iconfont icon-QQ bgblue f-46"></div>
                <div>QQ登陆</div> 
            </div>
            <div>
                <!-- <img src="../../assets/wx.png" alt="">  -->
                <div class="iconfont icon-weixin bggreen f-46"></div>
                <div>微信登录</div>          
            </div>
            <div >
                <!-- <img src="../../assets/wb.png" alt="">     -->
                <div class="iconfont icon-weibo bgred f-46"></div>
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
            ym:{},      //用户密码的输入
            yzmspan:"请输入验证码",
            yzmkg:true,
            smsColor:"",
        }
    },
    methods:{
        getUrl(data){   //得到登录注册函数函数
         var ym=this.ym; 
            if(data.code==1){
                ym.uname=data.uname;
                ym.upwd=data.upwd;
                ym.code=data.code;
            }else{
                ym.uphone=data.uphone;
                ym.uyzm=data.uyzm;
                ym.code=data.code;
            }  
        },
        login(){
            var ym=this.ym
            if(ym.code==1){
                console.log(ym)
                }else{
                console.log(ym) 
                }
            },
        reg(){console.log(0)},
        per(sur){                                   //登陆方式函数
            this.ym={};                             //清除保存的记录
            this.active=sur;
            this.spanswitch=!(this.spanswitch)
            },
        Yzm(){//验证码函数
            if(this.yzmkg){
                this.yzmkg=false;
                var i=60;
                this.smsColor="smsColor";
                this.yzmspan=`发送短信中(${--i})` 
                var time=setInterval(()=>{
                  this.yzmspan=`发送短信中(${--i})` 
                  if(i==0){
                    this.yzmspan=`请输入验证码`;
                    this.yzmkg=true;
                    this.smsColor="smsColor"
                    clearInterval(time)
                }     
                },1000);
            }
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
.login .f-46{
    text-align: center;
    height:46px;
    font-size:46px 
}
.login .bgblue{
    color: #1296db;
}
.login .bggreen{
    color: #79d160;
}
.login .bgred{ 
    color: #fd7662;
}
</style>
