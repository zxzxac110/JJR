<template>
  <!-- 职位详情3 -->
  <div>
    <!-- 滚动指令 -->
    <div>
      <!-- 顶部 -->
      <!-- 中间内容 -->
      <div class="k1">
        <div class="k2">
          <div class="k3">
            <span>所属部门：市场营销部</span>
            <span>{{aaa(list.time)}}</span>
          </div>
          <div class="k4">{{list.title}}</div>
          <div class="k5">{{list.salary}}</div>
          <div class="k6">
            <span>{{list.education}}</span>
            <span>{{list.experience}}</span>
            <span>{{list.cantonal}}</span>
            <span>22-35岁</span>
          </div>
          <a href="javascript:;"
             class="k7">
            <img :src="'http://127.0.0.1:3000/'+list.pic">
            <div class="k8">s
              <div class="k9">{{list.cname}}</div>
              <div class="k10">
                <span>实木家具,板式家具,软体家具</span>
                <span class="k11">200-500人</span>
              </div>
            </div>
            <span class="k12"></span>
          </a>
        </div>
        <div class="q1">
          <div class="q2">
            <img src="../img/10.png"
                 alt="">
          </div>
          <div class="q3">
            <span>{{list.title}}</span>
          </div>
          <div class="q4">岗位职责</div>
          <div>{{list.details}}</div>
          <!-- <div class="q5">1. 通过聊天软件,耐心回答客户提出各种问题,达成双方愉快交易，处理订货信息 <br>2. 熟悉淘宝的各种操作规则,处理客户要求,修改价格,管理店铺等; <br>3. 解答顾客提问，引导顾客进行购买，促成交易。 <br>4. 为网上客户提供售后服务,并以良好的心态及时解决客户提出的问题和要求,提供售后服务并能解决一般投诉。 <br>欢迎有兴趣的小伙伴加盟！！！</div> -->
        </div>
        <div class="z1">
          <div class="z2">
            <img src="../img/13.png"
                 alt="">
          </div>
          <div class="z3">
            <span>五险</span>
            <span>包住宿</span>
            <span>包分配对象</span>
            <span>月薪上不封顶</span>
          </div>
        </div>
        <div class="d1">
          <div class="d2">
            <img src="../img/15.png"
                 alt="">
          </div>
          <div class="d3">
            <span id="spa">湖南长沙</span>
            <span class="d4">地图导航</span>
          </div>
        </div>
        <div class="zw1">
          <div class="zw2">
            <img src="../img/17.png"
                 alt="">
          </div>
          <div class="zw3">
            <div class="zw4">
              <span class="sp1">{{linkman}}</span>
              <span class="sp2">{{list.linkman}}</span>
            </div>
            <div class="zw5">
              <div class="zw6">
                <i></i>
                <div class="zw7">
                  <a href="#">{{list.phone}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div style="margin-bottom:48px"></div>
      <!-- <mt-spinner type="triple-bounce" color="red"  :size="60" ></mt-spinner> -->
      <mt-tabbar>
        <mt-tab-item id="s1"
                     @click.native="shoucang(list.cid)">
          <img slot="icon"
               :src="'http://127.0.0.1:3000/'+collectimg">
          收藏
        </mt-tab-item>

        <mt-tab-item id="s1">
          <mt-button @click="openConfirm"
                     size="normal"
                     type="danger">
            投递简历
          </mt-button>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: {},
      linkman: "",
      collectimg: "08.png"
    }
  },
  methods: {
    aaa (time) {//具体时间函数
      var a = new Date(Number(time))     //转化为标准时间格式
      a = a.toLocaleString();      //转化为标准时间格式
      a = a.split(" ")[0]            //分割 获得数组 只要前面的2019/8/19
      return a;
    },
    shoucang: function (cid) {         //收藏函数
      var url = "data1";
      var time = new Date().getTime()
      var uid = sessionStorage.getItem("uid");
      var { title, salary, cname, experience, education, pic, province, cantonal } = this.list
      var obj = {        uid,
        cid,
        title,
        salary,
        time,
        cname,
        experience,
        education,
        pic,
        province,
        cantonal
      };
      if (!uid) {
        this.$toast({ message: "请先登录" });
        this.$router.push("/omg?id=m3");
        return;
      }
      console.log(obj)
      this.axios.get(url, { params: obj }).then(
        res => {
          if (res.data.code > 0) {
            this.collectimg = "09.png"     //改变图片样式
            this.$toast({ message: res.data.msg });    //弹窗
          } else {
            this.$toast({ message: res.data.msg })   //弹窗
          }
        }
      )
    },
    openConfirm () {
      //功能:显示确认消息框
      this.$messagebox
        .confirm("确认投递？")//消息内容
        .then(action => {//用户选择确认回调函数
          console.log("确认")
        })
        .catch(err => {//用户选择取消回调函数
          console.log("取消")
        })
    },
    datas () {
      var cid = window.location.href.split("=")[1];
      var uid = sessionStorage.getItem("uid");
      if (!cid) { cid = 1 };
      if (!uid) { var obj = { cid } } else { var obj = { uid, cid } }
      console.log(obj)
      var url = "data1"
      this.axios.get(url, { params: obj }).then(
        res => {
          if (res.data.code > 0) {
            this.list = res.data.data[0];
            console.log(this.list)
            this.linkman = this.list.linkman.split("")[0]
            this.collectimg = this.list.aixin
          } else {
            this.$toast({ message: res.data.msg })
          }
        }
      )
    }
  },
  mounted () {
    this.datas()
  },
  created () {
    sessionStorage.setItem("i", 3);
  },
}
</script>
<style scoped>
div > .mint-msgbox {
  border-radius: 8px;
}
button > .mint-msgbox-btn > .mint-msgbox-confirm {
  color: red;
}
.mint-header {
  background-color: #e63038;
  z-index: 1000;
  top: 0px;
  width: 100%;
  position: fixed;
}
.mint-tabbar {
  position: fixed;
}
.tt {
  height: 100%;
}
.k1 {
  background-color: #fff;
  padding: 17px 11px;
  font-size: 16px;
  margin: 0;
  border: 0;
  font-weight: 400;
  vertical-align: baseline;
}
.k1 > .k2 {
  box-shadow: 0 0 12px #d9d9d9;
  border-radius: 5px;
  padding: 18px 17px;
}
.k1 > .k2 > .k3 {
  color: #9f9e9e;
  font-size: 13px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.k4 {
  color: #242424;
  font-size: 22px;
  margin-top: 14px;
}
.k5 {
  color: #f74744;
  font-size: 16px;
  margin-top: 10px;
}
.k6 {
  color: #242424;
  font-size: 13px;
  display: flex;
  margin-top: 8px;
}
.k6 span::before {
  content: "|";
  margin: 0 4px;
}
.k7 {
  align-items: center;
  margin-top: 22px;
  display: flex;
  -webkit-box-align: center;
  text-decoration: none;
  color: #7e8c8d;
}
.k7 img {
  width: 80px;
  height: 40px;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin-right: 12px;
}
.k8 {
  -webkit-box-flex: 1;
  flex: 1;
  overflow: hidden;
}
.k9 {
  color: #464646;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.k10 {
  color: #8c8c8c;
  font-size: 13px;
  margin-top: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.k11::before {
  content: "|";
  margin: 0 3px;
}
.k12 {
  background: url(../img/12.png) no-repeat;
  width: 15.5px;
  height: 13.5px;
  background-size: contain;
  margin-left: 10px;
}
.q1 {
  background-color: #fff;
  margin-top: 10px;
  padding: 0 15px 12px;
}
.q2 {
  padding: 20px 0;
  text-align: center;
}
.q2 img {
  height: 24px;
}
.q3 {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.q3 span {
  height: 20px;
  border-radius: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid #e5e5e5;
  color: #757575;
  font-size: 14px;
  padding: 0 10px;
  margin-right: 8px;
  margin-bottom: 8px;
}
.q4 {
  color: #414141;
  font-size: 14px;
}
.q5 {
  color: #414141;
  font-size: 14px;
  line-height: 21px;
  margin-top: 7px;
  word-break: break-all;
}
.z1 {
  background: #fff;
}
.z2 {
  padding: 20px 0;
  text-align: center;
}
.z2 img {
  height: 24px;
}
.z3 {
  padding: 0 14px 5px;
  display: flex;
  flex-wrap: wrap;
}
.z3 span {
  background-color: #757575;
  font-size: 14px;
  color: #fff;
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 14px;
  position: relative;
}
.z3 span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-color: transparent transparent #fff #fff;
  border-style: solid;
  border-width: 12px 3px;
}
.z3 span::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-color: #fff #fff transparent transparent;
  border-style: solid;
  border-width: 12px 3px;
}
.d1 {
  background: #fff;
  margin-top: 10px;
  padding-bottom: 16px;
}
.d2 {
  padding: 20px 0;
  text-align: center;
}
.d2 img {
  height: 24px;
}
.d3 {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0 15px;
}
.d3 > #spa {
  color: #414141;
  font-size: 14px;
  line-height: 24px;
  -webkit-box-flex: 1;
  flex: 1;
}
.d3 > .d4 {
  color: #757575;
  font-size: 12px;
  margin-top: 7px;
}
.d3 > .d4::after {
  content: "";
  background: url(../img/16.png) no-repeat;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: contain;
  margin-left: 7px;
}
.zw1 {
  margin-top: 10px;
  background-color: #fff;
  padding-bottom: 17px;
}
.zw2 {
  padding: 20px 0;
  text-align: center;
}
.zw2 img {
  height: 24px;
}
.zw3 {
  box-shadow: 0 0 13px #ebebeb;
  margin: 0 13px;
  padding: 15px 29px 15px 10px;
  justify-content: space-between;
  display: flex;
  -webkit-box-pack: justify;
}
.zw4 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.zw4 > .sp1 {
  margin-left: 0;
  width: 41px;
  height: 41px;
  text-align: center;
  line-height: 41px;
  margin-right: 16px;
  color: #fff;
  font-size: 14px;
  background-color: #7483a2;
  border-radius: 50%;
}
.zw4 > .sp2 {
  color: #8c8c8c;
  font-size: 14px;
}
.zw5 {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
}
.zw6 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.zw6 > i {
  background: url(../img/18.png) no-repeat;
  background-size: contain;
  width: 16px;
  height: 18px;
}
.zw6 > .zw7 {
  font-size: 13px;
  margin-left: 8px;
}
.zw6 > .zw7 > a {
  text-decoration: none;
  color: #757575;
}
</style>