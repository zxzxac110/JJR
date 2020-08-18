<template>
  <!-- 未完成  不准备做-->
  <div class="login">
    <div class="getyzm"
         :class="getyzmh">
      <div>
        【JJR家具人才网】<span class="getyzms">{{yamData}}</span>,找回验证码15分钟内有效，请尽快完成验证
      </div>
    </div>
    <myheader></myheader>
    <div class="yminput">
      <div class="ymimgdiv iconfont icon-yonghu">
      </div>
      <mt-field class="ym-field bm"
                placeholder="请输入用户名"
                v-model="uname"></mt-field>
    </div>
    <div class="yminput">
      <div class="ymimgdiv iconfont icon-zhucedenglushoujihao">
      </div>
      <mt-field class="ym-field bm"
                placeholder="请输入常用手机号"
                v-model="uphone"></mt-field>
    </div>
    <div class="yminput smsinput">
      <div class="ymimgdiv iconfont icon-yanzhengma">
      </div>
      <mt-field class="w-45"
                placeholder="验证码"
                v-model="uyzm"></mt-field>
      <span class="spans"
            @click="Yzm"
            :class="smsColor">{{yzmspan}}</span>
    </div>
    <mt-button @click="mmfind"
               class="tlogin">找回</mt-button>
    <mt-button @click="login"
               class="treg">返回登录</mt-button>
  </div>
</template>
<script>

import myheader from "../Myheader.vue"
export default {
  data () {
    return {
      uname: "",
      uyzm: "",
      uphone: "",
      yzmkg: true,
      smsColor: "",
      yzmspan: "请输入验证码",
      yamData: "我是要输入的验证码啊啊啊",
      getyzmh: "getyzmh"
    }
  },
  methods: {
    login () {
      this.$router.push("/omg?id=m3")
    },
    mmfind () {
      var uname = this.uname
      var uyzm = this.uyzm
      var uphone = this.uphone
      if (!(/^[a-zA-Z][a-z0-9]{6,12}$/i.test(uname))) {
        this.$toast({ message: "用户格式有误" });
        return;
      }
      if (!(/^[a-zA-Z0-9]{6}$/i.test(uyzm)) || this.yzmkg == true || uyzm != this.yamData) {
        this.$toast({ message: "验证码有误" });
        return;
      }
      if (!(/^[1][3-9]\d{9}$/i.test(uphone))) {
        this.$toast({ message: "手机号格式有误" });
        return;
      }
      var url = "mmfind";
      var obj = { uname, uphone }
      this.axios.get(url, { params: obj }).then(
        res => {
          if (res.data.code > 0) {
            this.$toast({ message: res.data.msg })
            //  this.$router.push("/login")
          } else {
            this.$toast({ message: res.data.msg });
          }
        }
      )
    },
    Yzm () {                                                 //发送验证码函数
      var uphone = this.uphone
      if (!(/^[1][3-9]\d{9}$/i.test(uphone))) {             //判断手机格式         
        this.$toast({ message: "手机号格式有误" });
        return;
      }
      if (this.yzmkg) {                                     //判断读秒是否完成
        this.yamData = '';
        for (var i = 0; i < 6; i++) {                           //随机验证码
          this.yamData += Math.floor(Math.random() * 10)
        }
        this.yzmkg = false;                               //不可再次发送验证码
        var i = 60;
        this.smsColor = "smsColor";
        this.yzmspan = `发送短信中(${--i})`
        var time = setInterval(() => {
          this.yzmspan = `发送短信中(${--i})`
          if (i == 57) {
            this.getyzmh = ""                             //出现验证码提示框
          }
          if (i == 50) {
            this.getyzmh = "getyzmh";                     //关闭验证码提示框
          }
          if (i == 0) {
            this.yzmspan = `请输入验证码`;
            this.yzmkg = true;
            this.smsColor = "";
            clearInterval(time)
          }
        }, 1000);
      }
    }
  },
  components: {
    myheader,
  },
}
</script>
<style scoped>
</style>
