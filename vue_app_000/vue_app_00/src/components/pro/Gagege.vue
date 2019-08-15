<template>
  <div>
    <!-- <div class="l_xian " :class="bnnn">
      <img id="l_img" style="width:100%;height:112%" src="../../assets/xianym.jpg" alt="">
    </div> -->
    <div class="JJR">
      <img src="../../assets/JJRLogo.png"  class="JJRhome" alt="">
      <P class="titlept">专业中高级家具人才招聘平台</P>
        <div class="homeinput">
          <span class="qing">请输入职位或公司名</span>
        </div>
    </div> 

     <div class="l_item">
      <div class="l_left">
        <img src="../../assets/download.png" class="l_gim">
        <p class="l_zi">企业中心</p>
      </div>
      <div class="l_left">
        <img src="../../assets/download2.png" class="l_gim">
        <p class="l_zi">个人中心</p>
      </div>
    </div> 

     <div>
      <mt-swipe :auto="6000" style="width:100%;height:200px">
      <mt-swipe-item><img style="width:100%;height: 200px" src="../../assets/1.png"></mt-swipe-item>
      <mt-swipe-item><img style="width:100%;height: 200px" src="../../assets/2.png" ></mt-swipe-item>
      <mt-swipe-item><img style="width:100%;height: 200px" src="../../assets/3.jpg" ></mt-swipe-item>
      <mt-swipe-item><img style="width:100%;height: 200px" src="../../assets/4.jpg" ></mt-swipe-item>
      <mt-swipe-item><img style="width:100%;height: 200px" src="../../assets/5.png" ></mt-swipe-item>
      <mt-swipe-item><img style="width:100%;height: 200px" src="../../assets/6.jpg" ></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 热门行业............................ -->
      <h3 class="l_remen">热门职业
      <a href="" class="l_mone">更多</a>
      </h3>
      <div>
        <div class="l_da">
          <div class="l_wrap">
            <div class="l_desc">
              <a href="" style="text-decoration:none;">
                <h4 class="l_pai">
                  <span class="l_link">深化设计</span>
                  <span class="l_money">&nbsp;&nbsp;7K-15K</span>
                  <span class="l_refreshTime">10小时前</span>
                </h4>
                <h4 class="l_Info">
                  <span>东莞市</span>
                  <span>&nbsp;|&nbsp;25-45岁</span>
                  <span>&nbsp;|&nbsp;高中</span>
                </h4>
                <div class="l_company">
                  <p class="l_uname">东莞市优扬家具有限公司</p>
                  <img class="l_lImg" src="../../assets/ChmvSFnwVkiAeA0BAADYjbQ20sc298.png" alt="">
                  <div style="clear:both"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      bnnn:""
    }
  },
    methods:{
    }, 
    created(){
        var i=5
        var time=setInterval(()=>{
          console.log(i)
          i--;
          if(i==0){
            this.bnnn="d-nnn";
             clearInterval(time);
          }
        },1000)
    },
}
</script>
<style scoped>
body {
  margin: 0;
}
.d-nnn{
  display: none;
}
body,html{
  font-family: PingFang SC,STHeitiSC-Light,Helvetica-Light,arial,sans-serif,Droid Sans Fallback;
}
.l_xian{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 90%;
    /* -webkit-transform: translateX(-50%); */
    /* transform: translateX(-50%); */
    background-size:100% 100%;
    border-radius: 4px;
}
.toptitle{
  width: 100%;
  height: 55px;
  background-color:#282424;
  background-size: cover;
}
.jjrLogo{
    width: 44px;
    height: 44px;
    display: inline-block;
    margin-top: 6px;
    margin-left: 24px;
    float:left;
}
.title{
    float: left;
    font-size: 18px;
    color: #fff;
    height: 55px;
    line-height: 55px;
    margin-left: 11px;
    margin-top:0px;
}
.xzAPP{
    width: 75px;
    height: 25px;
    display: block;
    float: right;
    margin-top: 16px;
    margin-right: 30px;
    color: #fff;
    line-height: 25px;
    text-align: center;
    border-radius: 2px;
    background: #e63038;
    font-size: 14px;
    text-decoration: none;
}
.JJRhome{
    width: 162px;
    display: block;
    margin: auto;
}
.JJR{
    background: #E63038;
    position: relative;
    height: 154px;
    padding-top: 42px;
    width: 100%;
}
.titlept{
  color: #fff;
  text-align: center;
  margin-top: 14px;
  font-size: 14px;
  letter-spacing: 1px;
}
.homeinput{
    width: 300px;
    background: #fff;
    border-radius: 50px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    margin: auto;
    margin-top: -4px;
}
.qing{
  color: #ccc8c8;
  font-size: 13px;
  margin-left: 4px;
}
.l_item{
  display: flex;
  margin-bottom: 10px;
  padding: 6px 0px;
  background: #fff;
}
.l_left{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 53px;
  text-align: center;
  border-right: 1px solid #ddd;
}
.l_gim{
  width: 25px;
  margin-top: 5px;
}
.l_zi{
  line-height: 20px;
  font-size: 13px;
  color:#444;
  margin: 0;
}
.l_remen{
  position: relative;
  height: 44px;
  line-height: 44px;
  text-indent: 14px;
  background: #fff;
  font-size: 16px;
  color: #282424;
  margin: 0;
  border-bottom:1px solid #eee;
}
.l_mone{
  color: #f84646;
  float: right;
  margin-right:14px;
  text-decoration: none;
}
.l_da{
  background: #fff;
  margin-bottom: 10px;
  zoom: 1;
}
.l_wrap{
  padding:0 2%;
  width:96%;
  margin: auto;
  position: relative;
}
.l_desc{
  margin-top:0;
  padding: 12px 0 16px;
  margin-bottom: 0;
  border-bottom:1px solid #eee;
}
.l_pai{
  color: 333;
  font-size: 16px;
  height: 25px;
  margin: 0;
}
.l_link{
  max-width: 150px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 25px;
  line-height: 25px;
  vertical-align: middle;
}
.l_money{
  height: 25px;
  line-height: 25px;
  display: inline-block;
  margin-right: 0;
  color: #f84744;
  vertical-align: middle;
}
.l_refreshTime{
  float: right;
  color: #464646;
  font-size: 13px;
  line-height: 25px;
}
.l_Info{
  line-height:25px;
  font-size:13px;
  margin:0;
  padding: 0;
}
.l_Info span{
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  color:#7E8c8D;
}
.l_company{
  margin-top: 0;
  zoom: 1;
}
.l_uname{
  font-size: 14px;
  color: #282424;
  width: 190px;
height: 20px;
  line-height: 20px;
  float: left;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.l_lImg{
  width: 80px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #ebe9e8;
  float: right;
}
</style>