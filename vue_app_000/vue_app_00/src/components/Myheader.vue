
<template>
    <div class="myheader">
        <mt-header :title="titles[0]" class="bg-e6">
            <!-- 跳转首页 -->
         <router-link to="/omg" slot="left"> 
        <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button slot="right">
            <img src="./img/07.png" height="30" width="30" slot="icon">
        </mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:"首页",
                // 问
            titles:["首页","分类","个人中心","职业详情","","登录","注册","应聘记录","简历编辑","职位收藏",
            "职位订阅","账号设置"]
        }
    },
    methods: {
        
    },
    updated(){
// var i=
// this.title=titles[i]
    }
}
</script>
<style scoped>
  .myheader{
      position: fixed;
      top:0px;
      width: 100%;
      background: #e63038;
      z-index: 1000;
  }  
  .bg-e6{
       background: #e63038
  }
</style>
