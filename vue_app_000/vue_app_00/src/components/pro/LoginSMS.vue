<!-- login子组件 短信验证登录 -->
<template>
    <div>
        <div class="yminput"> 
            <div class="ymimgdiv iconfont icon-yonghu">
                <!-- <img src="../../assets/yh.png" alt="">  -->
            </div>
            <mt-field class="ym-field bm" placeholder="手机号" v-model="uphone" @change="setuname"></mt-field>
        </div>
        <div class="yminput smsinput">
            <div class="ymimgdiv iconfont icon-yanzhengma">
                <!-- <img src="../../assets/yzm.png" alt=""> -->
            </div>
            <mt-field class="w-45" placeholder="验证码" v-model="uyzm" @change="setuname"></mt-field>
            <span @click="Yzm" class="spans" :class="smsColor" :v-model="yzmspan">{{yzmspan}}</span>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            uyzm:"",
            uphone:""
        }
    },
   props:{
        yzmspan:{default:""},
        Yzm:{type:Function},
        smsColor:{default:""},
    },
    methods: {
        setuname(){         //code 2代表手机登录
            this.$emit('yzmfun',{uphone:this.uphone,uyzm:this.uyzm,code:"2"});
        }
    },
}
</script>