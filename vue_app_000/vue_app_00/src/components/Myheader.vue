
<template>
    <div class="myheader">
        <mt-header title="职业详情" class="bg-e6">
        <router-link to="/" slot="left">
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
