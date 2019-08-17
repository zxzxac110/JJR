<template>
<!-- 登录界面 -->
    <div class="text-center login">
        <div class="getyzm" :class="getyzmh">
            <div>
                【JJR家具人才网】<span class="getyzms">{{yamData}}</span>,注册登录验证码15分钟内有效，请尽快完成验证
            </div>
        </div>
        <div class="loginD-none">
            <div><span :class="spanswitch?spanDefault:null"  @click="per('ym')">账号登录</span></div>
            <div><span :class="!spanswitch?spanDefault:null" @click="per('sms')">短信验证码登录</span>
            </div>
        </div>
<mt-tab-container v-model="active" >
        <mt-tab-container-item id="ym">
          <loginym @changeUrl="getUrl"></loginym>
        </mt-tab-container-item> 
        <mt-tab-container-item id="sms">
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
                <div class="iconfont icon-QQ bgblue f-46"></div>
                <div>QQ登陆</div> 
            </div>
            <div>
                <div class="iconfont icon-weixin bggreen f-46"></div>
                <div>微信登录</div>          
            </div>
            <div >
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
            yamData:"我是要输入的验证码啊啊啊",
            getyzmh:"getyzmh",
        }
    },
     props:{
         daddy:{default:""} 
    },
    methods:{
        getUrl(data){   //得到子组件参数 登录注册函数函数
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
            var ym=this.ym;
            var url="login";
            var obj;
            if(ym.code==1){
                var uname=ym.uname
                var upwd=ym.upwd
                /*字母开头 7-13位 */
                var reg=new RegExp("^[a-zA-Z][a-z0-9]{6,12}$","i")        
                if(!reg.test(uname)){
                    this.$toast({message:"用户格式有误"});
                    return  //失败停止执行
                }    
                if(!reg.test(upwd)){
                    this.$toast("密码格式有误");
                    return
                } 
                obj={uname:uname,upwd:upwd}
                }else{
                var uphone=ym.uphone;
                var uyzm=ym.uyzm;
                var yzm=new RegExp("^\\d{6}$","i")        
                var phone=new RegExp("^[1][3-9]\\d{9}$","i")      
                if(!phone.test(uphone)){
                    this.$toast({message:"手机格式有误"});
                    return  //失败停止执行
                }    
                if(!yzm.test(uyzm)||this.yzmkg==true||uyzm!=this.yamData){
                    this.$toast("验证码错误");
                    return
                }
                obj={uphone};
                }
                this.axios.get(url,{params:obj}).then(
                    res=>{
                     if(res.data.code==1){
                         sessionStorage.setItem("uid", res.data.data[0].uid);
                         sessionStorage.setItem("uname", res.data.data[0].uname);
                         this.$emit('changeUrl',{logindata:"m3"})     //登录成功.传递参数给父组件
                         this.$router.push("/omg?id=m3")
                        }else{
                       this.$toast({message:res.data.msg})
                }
            })
            },
        reg(){                                      //注册按钮跳转
            this.$router.push("/reg")
        },
        per(sur){                                   //登陆方式函数
            this.ym={};                             //清除保存的记录
            this.active=sur;
            this.spanswitch=!(this.spanswitch)
            },
        Yzm(){                                                 //发送验证码函数
            var uphone=this.ym.uphone
            if(!(/^[1][3-9]\d{9}$/i.test(uphone))){             //判断手机格式         
                 this.$toast({message:"手机号格式有误"});
                 return;
                 }
            if(this.yzmkg){                                     //判断读秒是否完成
                    this.yamData='';
                for(var i=0;i<6;i++){                           //随机验证码
                    this.yamData+=Math.floor(Math.random()*10)
                }
                this.yzmkg=false;                               //不可再次发送验证码
                var i=60;
                this.smsColor="smsColor";
                this.yzmspan=`发送短信中(${--i})` 
                var time=setInterval(()=>{
                  this.yzmspan=`发送短信中(${--i})` 
                  if(i==57){
                    this.getyzmh=""                             //出现验证码提示框
                  }
                  if(i==50){
                    this.getyzmh="getyzmh";                     //关闭验证码提示框
                  }
                  if(i==0){
                    this.yzmspan=`请输入验证码`;
                    this.yzmkg=true;
                    this.smsColor="";
                    clearInterval(time)
                }     
                },1000);
            }
        }
    },
    components:{                                    //引入子组件
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
