<!--Reg 登录界面  -->
<template>
    <div class="login">
        <div class="yminput"> 
            <div class="ymimgdiv iconfont icon-yonghu">
                <!-- <img src="../../assets/yh.png" alt="">  -->
            </div>
            <mt-field class="ym-field bm" placeholder="请输入常用手机号" v-model="uname" ></mt-field>
        </div>
        <div class="yminput smsinput">
            <div class="ymimgdiv iconfont icon-yanzhengma">
                <!-- <img src="../../assets/yzm.png" alt=""> -->
            </div>
            <mt-field class="w-45" placeholder="验证码验证码" v-model="uyzm" ></mt-field>
            <span class="spans">获取验证码</span>
        </div> 
        <div class="regzpp">注册即视为同意JJR家具招聘<span>《用户协议》</span></div>     
        <mt-button   class="tlogin">立即注册</mt-button>
        <mt-button   class="treg" >登录</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            uyzm:""
        }
    },
}
</script>
<style scoped>
    
</style>