
<template>
  <div class="myheader">
    <mt-header :title="unameomg||name"
               class="bg-e6">
      <!-- 跳转首页 -->
      <router-link to=""
                   slot="left">
        <mt-button icon="back"
                   @click="backHistory">返回</mt-button>
      </router-link>
      <mt-button slot="right">
        <img src="./img/07.png"
             height="30"
             width="30"
             slot="icon"
             @click="toOMG">
      </mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    backHistory () {                            //换回函数
      var url = window.location.hash.slice(2, 5)  //地址栏#后面数据.下标2截取后3位
      if (url === "omg") { return; }             //当此时页面在首页的时候.不让它返回了
      this.$router.go(-1)
    },
    toOMG () {                                  //跳转首页函数
      this.$router.push("/omg?id=m1")
      if (window.location.hash.slice(2, 5) === "omg") {  //已经在首页了.这时候要跳面板
        this.$emit('HchangeUrl', { myheader: "m1" })
      }
    }
  },
  props: {
    name: { default: "" },     //跳转页面返回来的值
    unameomg: { default: "" }  //组件的值
  },
  watch: {
    url () {
      console.log(this.url)
      console.log(window.location.hash)
    }
  },
}
</script>
<style scoped>
.myheader {
  position: fixed;
  top: 0px;
  width: 100%;
  background: #e63038;
  z-index: 1000;
}
.bg-e6 {
  background: #e63038;
}
</style>
