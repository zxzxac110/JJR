<template>
<div>
  <div>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="m1">
          首页引入
        </mt-tab-container-item>
        <mt-tab-container-item id="m2">
          分类
        </mt-tab-container-item>
        <mt-tab-container-item id="m3">

          <login></login>
        </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="m1" @click.native="changeState(0)" >
        <tabbaricon
          :selectedImage="require('./img/02.png')"
          :normalImage="require('./img/01.png')"
          :focused="currentIndex[0].isSelect">
        </tabbaricon>
        首页
      </mt-tab-item>
      <mt-tab-item id="m2" @click.native="changeState(1)" >
        <tabbaricon
          :selectedImage="require('./img/04.png')"
          :normalImage="require('./img/03.png')"
          :focused="currentIndex[1].isSelect">
        </tabbaricon>
        分类
      </mt-tab-item>
      <mt-tab-item id="m3" @click.native="changeState(2)" >
        <tabbaricon
          :selectedImage="require('./img/06.png')"
          :normalImage="require('./img/05.png')"
          :focused="currentIndex[2].isSelect">
        </tabbaricon>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div> 
</div>
</template>
 <script>
import TabBarIcon from "./pro/TabBarIcon.vue"
import login from "./pro/Login.vue"
export default {
     data(){
         return{
             active:"m1",
             currentIndex:[
             {isSelect:true},
             {isSelect:false},
             {isSelect:false}]
             }
       },
        methods: {
       changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
        console.log(this.active)
       }
       
      }

    }
  },
    components:{
            "tabbaricon":TabBarIcon,
            login
 },
}
</script>
<style  scoped>
/*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#e63038;
}

.page-wrap{
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px;
}
</style>