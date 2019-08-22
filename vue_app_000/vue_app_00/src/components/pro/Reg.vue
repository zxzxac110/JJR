<!--Reg 注册界面 15 -->
<template>
    <div class="login">
        <div class="getyzm" :class="getyzmh">
            <div>
                【JJR家具人才网】<span class="getyzms">{{yamData}}</span>,注册登录验证码15分钟内有效，请尽快完成验证
            </div>
        </div>
        <myheader></myheader>
        <div class="yminput"> 
            <div class="ymimgdiv iconfont icon-yonghu">
                <!-- <img src="../../assets/yh.png" alt="">  -->
            </div>
            <mt-field class="ym-field bm" placeholder="请输入用户名" v-model="uname" ></mt-field>
        </div>
        <div class="yminput">
            <div class="ymimgdiv iconfont icon-mima">
            </div>
            <mt-field class="ym-field bm" placeholder="请输入密码" type="password" v-model="upwd" ></mt-field>
        </div>
        <div class="yminput">
            <div class="ymimgdiv iconfont icon-zhucedenglushoujihao">
            </div>
            <mt-field class="ym-field bm" placeholder="请输入常用手机号" v-model="uphone" ></mt-field>
        </div>
        <div class="yminput smsinput">
            <div class="ymimgdiv iconfont icon-yanzhengma">
            </div>
            <mt-field class="w-45" placeholder="验证码" v-model="uyzm" ></mt-field>
            <span class="spans" @click="Yzm" :class="smsColor">{{yzmspan}}</span>
        </div> 
        <div class="regzpp">注册即视为同意JJR家具招聘<span @click="agreement">《用户协议》</span></div>   
        <mt-button @click="reg"  class="tlogin">立即注册</mt-button>
        <mt-button @click="login"  class="treg" >登录</mt-button>
    </div>
</template>
<script>

import myheader from "../Myheader.vue"
export default {
    data(){
        return{
            uname:"",
            upwd:"",
            uyzm:"",
            uphone:"",
            yzmkg:true,
            smsColor:"",
            yzmspan:"请输入验证码",
            yamData:"我是要输入的验证码啊啊啊",
            getyzmh:"getyzmh"
        }
    },
    methods: {
//跳转用户协议
        agreement(){
             this.$router.push("/agreement")
        },
//跳转登录界面
        login(){
            this.$router.push("/omg?id=m3")
        },
//注册功能
        reg(){
            var uname=this.uname
            var upwd=this.upwd
            var uyzm=this.uyzm
            var uphone=this.uphone
             if(!(/^[a-zA-Z][a-z0-9]{6,12}$/i.test(uname))){
                this.$toast({message:"用户格式有误"});
                 return;
                 }
             if(!(/^[a-zA-Z][a-z0-9]{6,12}$/i.test(upwd))){ 
                 this.$toast({message:"密码格式有误"});
                 return;
                 }
              if(!(/^[a-zA-Z0-9]{6}$/i.test(uyzm))||this.yzmkg==true||uyzm!=this.yamData){
                  this.$toast({message:"验证码有误"});
                  return;
                  }
             if(!(/^[1][3-9]\d{9}$/i.test(uphone))){
                 this.$toast({message:"手机号格式有误"});
                 return;
                 }
             var url="reg";
             var obj={uname,upwd,uphone}
            this.axios.post(url,this.qs.stringify(obj)).then(  //post 需要传送一个字符串
            res=>{
                      if(res.data.code>0){
                        this.$toast({message:res.data.msg})  
                        this.$router.push("/omg?id=m3")
                      }else{
                        this.$toast({message:res.data.msg});  
                      }
                 }
             )
        },
//发送手机验证码
         Yzm(){                                                 //发送验证码函数
            var uphone=this.uphone
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
    created(){ 
        sessionStorage.setItem("i",15);
    },
    components:{
            myheader,
 },
}
</script>
<style scoped>
    
</style>