
<template>
    <div class="myheader">
        <mt-header :title="unameomg||name" class="bg-e6">
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
            titles:["用户协议","公司介绍","职位详情","推荐","首页","基本信息","登录界面","个人中心","我的收藏","我的订阅","应聘记录","简历编辑","用户界面","职位搜索","注册界面"],
            i:0
        }
    },
    methods: {
        
    },
    props:{
         name:{default:""},
         unameomg:{default:""} 
    },
    // mounted() {
    //       console.log("头部变化1")
    //       this.i=sessionStorage.getItem("i")-1
    //       console.log(this.i)
    // },
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
