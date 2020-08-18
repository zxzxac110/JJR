<template>
  <div>
    <div>
      <myheader :unameomg="unameomg"
                @HchangeUrl="HgetUrl"></myheader>
      <mt-tab-container v-model="active">
        <!-- 首页 -->
        <mt-tab-container-item id="m1">
          <gagege></gagege>
        </mt-tab-container-item>
        <!-- 分类 -->
        <mt-tab-container-item id="m2">
          <fenlei></fenlei>
        </mt-tab-container-item>
        <!-- 个人 -->
        <mt-tab-container-item id="m3">
          <mt-tab-container v-model="islogin">
            <mt-tab-container-item id="no">
              <login @changeUrl="getUrl"></login>
            </mt-tab-container-item>
            <mt-tab-container-item id="yes">
              <personal :msg="personald"></personal>
            </mt-tab-container-item>
          </mt-tab-container>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active"
                 fixed>
        <mt-tab-item id="m1"
                     @click.native="changeState(0)">
          <tabbaricon :selectedImage="require('./img/02.png')"
                      :normalImage="require('./img/01.png')"
                      :focused="currentIndex[0].isSelect">
          </tabbaricon>
          首页
        </mt-tab-item>
        <mt-tab-item id="m2"
                     @click.native="changeState(1)">
          <tabbaricon :selectedImage="require('./img/04.png')"
                      :normalImage="require('./img/03.png')"
                      :focused="currentIndex[1].isSelect">
          </tabbaricon>
          热门
        </mt-tab-item>
        <mt-tab-item id="m3"
                     @click.native="changeState(2)">
          <tabbaricon :selectedImage="require('./img/06.png')"
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
import TabBarIcon from "./pro/TabBarIcon.vue"   //底部导航栏
import login from "./pro/Login.vue"             //登录界面
import myheader from "./Myheader.vue"           //头部
import fenlei from "./pro/fenlei.vue"           //分类
import personal from "./pro/Personal.vue"       //个人中心
import gagege from "./pro/Gagege.vue"           //首页
export default {
  data () {
    return {
      unameomg: "首页",
      active: "m1",
      currentIndex: [
        { isSelect: true, unameomg: "首页" },
        { isSelect: false, unameomg: "热门" },
        { isSelect: false, unameomg: "个人中心" }],
      islogin: "no",     //判断登录状态.显示要显示的面板
      logindata: "",      //登录后跳转变量函数
      personald: []       //发送给个人界面的函数
    }
  },
  methods: {
    changeState (n) {                                    //点击底部导航栏时
      for (var i = 0; i < this.currentIndex.length; i++) {        //创建循环,循环数组中内容
        if (n == i) {                                         //循环下标2选1
          this.currentIndex[i].isSelect = true;             //3:当前下标元素true
          var url = window.location.href.split("?")[0] + '?id=m' + (i + 1)
          window.location.replace(url)                     //改变当前地址栏信息.为后续的返回做准备
          if (i == 2) {                                       //等于2时.判断还否登录
            this.showlogin()
          }
          this.unameomg = this.currentIndex[i].unameomg;    //传给子组件的头部信息
        } else {                                            //循环下标2选1
          //4:其它元素修改false
          this.currentIndex[i].isSelect = false;
        }
      }
    },
    showlogin () {            //判断当前是是否登录
      if (sessionStorage.getItem("uid") > 0) {//登录执行界面函数
        this.islogin = "yes";
        if (this.active == "m3") { this.unameomg = this.currentIndex[2].unameomg = "个人中心" }
      } else {
        this.islogin = "no"
        if (this.active == "m3") { this.unameomg = this.currentIndex[2].unameomg = "登录界面" }
      }
    },
    getUrl (data) {
      this.logindata = data.logindata             //登录成功.改变
      this.islogin = "yes";                       //打开开关.显示个人中心
    },
    HgetUrl (data) {                              //头部传过来的数据
      this.tturl()                              //这时候地址栏改变了。调用地址函数
    },
    //获取地址栏信息
    tturl () {
      var lid = window.location.href.split("=")[1]   //页面跳转得到参数
      if (lid) {                                    //有无参数的切换面板操作
        this.active = lid
        var n = lid.substr(-1) - 1                    //下标
      } else {
        this.active = "m1"
      }
      this.changeState(n)                         //底部.头部样式变化函数
    }
  },
  watch: {
    // logindata(){                              //只有登录了.这个数值才会变化.
    //   this.islogin="yes";
    // },
    islogin () {                                    //如果登录状态有变化 就发送数据到子面板
      if (this.islogin == "yes") {
        var uid = sessionStorage.getItem("uid");
        if (uid) {
          var url = "personal"
          var obj = { uid }
          this.axios.get(url, { params: obj }).then(     //获取头部数据
            res => {
              if (res.data.code > 0) {
                this.personald = res.data.data[0] //保持头部信息
              } else {
                this.$toast({ message: res.data.msg })//输出弹窗数据
              }
            })
        }
      }
    },
  },
  mounted () {
    this.tturl()      //获取地址栏信息函数                              
  },
  updated () {
    this.showlogin()  //当页面有变化是.就判断一次是否登录
  },
  components: {
    "tabbaricon": TabBarIcon,
    login,
    myheader,
    fenlei,
    gagege,
    personal
  },
}
</script>
<style  scoped>
/*最外层父元素Home.vue*/
.page-tabbar {
  overflow: hidden; /*溢出隐藏*/
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar > .mint-tab-item {
  color: #999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #e63038;
}

.page-wrap {
  overflow: auto; /*溢出显示轮动条*/
  padding-bottom: 60px;
}
</style>