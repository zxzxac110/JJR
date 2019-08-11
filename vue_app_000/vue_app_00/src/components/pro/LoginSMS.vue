<!-- login 的短信验证登录 -->
<template>
    <div>
        <div class="yminput"> 
            <div class="ymimgdiv">
                <img src="../../assets/yh.png" alt=""> 
            </div>
            <mt-field class="ym-field bm" placeholder="手机号" v-model="uname" ></mt-field>
        </div>
        <div class="yminput smsinput">
            <div class="ymimgdiv">
                <img src="../../assets/yzm.png" alt="">
            </div>
            <mt-field class="w-45" placeholder="验证码" v-model="uyzm" ></mt-field>
            <span class="spans">获取验证码</span>
        </div> 
    </div>
</template>
<script>
export default {
   props:{
        uname:"",
        uyzm:""
    },
}
</script>