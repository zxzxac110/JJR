<!-- login子组件  用户密码登录 -->
<template>
    <div>
        <div class="yminput"> 
            <div class="ymimgdiv iconfont icon-yonghu">
            </div>
            <mt-field class="ym-field bm " placeholder="用户名" v-model="uname" @change="setuname"></mt-field>
        </div>
        <div class="yminput">
            <div class="ymimgdiv iconfont icon-mima">
            </div>
            <mt-field class="ym-field" placeholder="请输入密码" type="password" v-model="upwd" @change="setuname"></mt-field>
        </div>
        <div>
            <mt-field type="password" placeholder="请输入密码">
<span class="iconfont icon-biyan"></span>
</mt-field>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return{
          uname:"",
          upwd:"",
      }
    },
    props:{
    },
    methods:{
        setuname(){//传参  1代表用户密码
            this.$emit('changeUrl',{uname:this.uname,upwd:this.upwd,code:"1"})
        }
    },
}
</script>