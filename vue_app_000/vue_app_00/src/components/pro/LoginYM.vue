<!-- login子组件  用户密码登录 -->
<template>
    <div>
        <div class="yminput"> 
            <div class="ymimgdiv iconfont icon-yonghu">
                <!-- <img src="../../assets/yh.png" alt="">  -->
            </div>
            <mt-field class="ym-field bm " placeholder="用户名/手机/邮箱" v-model="uname" ></mt-field>
        </div>
        <div class="yminput">
            <div class="ymimgdiv iconfont icon-mima">
                <!-- <img src="../../assets/mm.png" alt=""> -->
            </div>
            <mt-field class="ym-field" placeholder="请输入密码" type="password" v-model="upwd" ></mt-field>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        uname:"",
        upwd:""
    },
}
</script>