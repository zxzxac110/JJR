<template>
<div>
    <!-- 滚动指令 -->
    <div>
        <!-- 顶部 -->
      <div style="margin-top:48px"></div>
      <mt-header title="职业详情">
      <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right"><img src="../img/07.png" height="30" width="30" slot="icon">
      </mt-button>
      </mt-header>
      <!-- 中间内容 -->
        <div class="k1">
          <div class="k2">
              <div class="k3">
                  <span>所属部门：市场营销部</span>
                  <span>7小时前</span>
              </div>
              <div class="k4">淘宝（天猫）客服</div>
              <div class="k5">4k-6k</div>
              <div class="k6">
                  <span>高中</span>
                  <span>3年</span>
                  <span>佛山市</span>
                  <span>22-35岁</span>
              </div>
              <a href="javascript:;" class="k7">
                  <img src="../img/11.png">
                  <div class="k8">
                      <div class="k9">佛山市顺德区今日美家家具有限公司</div>
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
                  <img src="../img/10.png" alt="">
              </div>
              <div class="q3">
                  <span>淘宝（天猫）客服</span>
              </div>
              <div class="q4">岗位职责</div>
              <div class="q5">1. 通过聊天软件,耐心回答客户提出各种问题,达成双方愉快交易，处理订货信息 <br>2. 熟悉淘宝的各种操作规则,处理客户要求,修改价格,管理店铺等; <br>3. 解答顾客提问，引导顾客进行购买，促成交易。 <br>4. 为网上客户提供售后服务,并以良好的心态及时解决客户提出的问题和要求,提供售后服务并能解决一般投诉。 <br>欢迎有兴趣的小伙伴加盟！！！</div>
          </div>
          <div class="z1">
                  <div class="z2">
                      <img src="../img/13.png" alt="">
                  </div>
                  <div class="z3">
                      <span>五险</span>
                      <span>包住宿</span>
                      <span>占位中</span>
                      <span>占位中</span>
                  </div>
          </div>
          <div class="d1"> 
              <div class="d2">
                  <img src="../img/15.png" alt="">
              </div>
              <div class="d3">
                  <span id="spa">湖南长沙</span>
                  <span class="d4">地图导航</span>
              </div>
          </div>
          <div class="zw1">
              <div class="zw2">
                  <img src="../img/17.png" alt="">
              </div>
              <div class="zw3">
                  <div class="zw4">
                     <span class="sp1">向</span>
                     <span class="sp2">某人</span>
                  </div>
                  <div class="zw5">
                      <div class="zw6">
                          <i></i>
                          <div class="zw7">
                              <a href="#">1888888888</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- 底部 -->
      <div style="margin-bottom:48px"></div>
    <!-- <mt-spinner type="triple-bounce" color="red"  :size="60" ></mt-spinner> -->
    <mt-tabbar >
    <mt-tab-item id="s1">
    <img slot="icon" src="../img/08.png">
    收藏
    </mt-tab-item>
  
    <mt-tab-item id="s1" >
        <mt-button @click="openConfirm" size="normal" type="danger">
    投递简历
        </mt-button>
       
    </mt-tab-item>
    </mt-tabbar>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {}
    },
    mounted:function(){
  	
    },
    methods: {
        handleClose: function(){
          console.log("返回")

          
      },
      openConfirm(){
       //功能:显示确认消息框
      this.$messagebox
      .confirm("确认投递？")//消息内容
      .then(action=>{//用户选择确认回调函数
         console.log("确认")
      })
      .catch(err=>{//用户选择取消回调函数
         console.log("取消")
      })
     },
    
}
  	

  
}
</script>
<style scoped>
div>.mint-msgbox{
    border-radius:8px;
} 
button>.mint-msgbox-btn>.mint-msgbox-confirm{
    color:red;
}
.mint-header{
        background-color:#e63038;
        z-index:1000;
        top:0px;
        width:100%;
        position:fixed;
}


.mint-tabbar{
    position: fixed;
}
.tt{
    height:100%
}
.k1{
    background-color: #fff;
    padding: 17px 11px;
    font-size: 16px;
    margin:0;
    border:0;
    font-weight: 400;
    vertical-align: baseline;
}
.k1>.k2{
    box-shadow: 0 0 12px #d9d9d9;
    border-radius: 5px;
    padding: 18px 17px;

}
.k1>.k2>.k3{
    color: #9f9e9e;
    font-size: 13px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

}
.k4{
    color: #242424;
    font-size: 22px;
    margin-top: 14px;
}
.k5{
    color: #f74744;
    font-size: 16px;
    margin-top: 10px;
}
.k6{
    color: #242424;
    font-size: 13px;
    display: flex;
    margin-top: 8px;

}
.k6 span::before{
    content: "|";
    margin: 0 4px;
}
.k7{
    align-items: center;
    margin-top: 22px;
    display: flex;
    -webkit-box-align: center;
    text-decoration: none;
    color: #7e8c8d;
}
.k7 img{
    width: 80px;
    height: 40px;
    border: 1px solid #eee;
    box-sizing: border-box;
    margin-right: 12px;
}
.k8{
-webkit-box-flex: 1;
    flex: 1;
    overflow: hidden;
}
.k9{
    color: #464646;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.k10{
    color: #8c8c8c;
    font-size: 13px;
    margin-top: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.k11::before{
    content: "|";
    margin: 0 3px;
}
.k12{
    background: url(../img/12.png) no-repeat;
    width: 15.5px;
    height: 13.5px;
    background-size: contain;
    margin-left: 10px;
}
.q1{
    background-color: #fff;
    margin-top: 10px;
    padding: 0 15px 12px;
}
.q2{
    padding: 20px 0;
    text-align: center;
}
.q2 img{
    height: 24px;
}
.q3{
    display: flex;
    flex-wrap:wrap;
    margin-bottom:10px;

}
.q3 span{
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
.q4{
    color:#414141;
    font-size:14px;
}
.q5{
    color: #414141;
    font-size: 14px;
    line-height: 21px;
    margin-top: 7px;
    word-break: break-all;

}
.z1{
    background: #fff;
}
.z2{
    padding:20px 0;
    text-align:center;
}
.z2 img{
    height:24px;
}
.z3{
    padding:0 14px 5px;
    display: flex;
    flex-wrap:wrap;
}
.z3 span{
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
.z3 span::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-color: transparent transparent #fff #fff;
    border-style: solid;
    border-width: 12px 3px;
}
.z3 span::after{
        content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-color: #fff #fff transparent transparent;
    border-style: solid;
    border-width: 12px 3px;
}
.d1{
    background: #fff;
    margin-top:10px;
    padding-bottom:16px
}
.d2{
    padding:20px 0;
    text-align:center;

}
.d2 img{
    height:24px;
}
.d3{
    display: flex;
   -webkit-box-pack: justify;
   justify-content: space-between;
    padding: 0 15px;
}
.d3>#spa{
    color: #414141;
    font-size: 14px;
    line-height: 24px;
    -webkit-box-flex: 1;
    flex: 1;
}
.d3>.d4{
    color: #757575;
    font-size: 12px;
    margin-top: 7px;
}
.d3>.d4::after{
    content: "";
    background: url(../img/16.png) no-repeat;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-size: contain;
    margin-left: 7px;
}
.zw1{
    margin-top: 10px;
    background-color: #fff;
    padding-bottom: 17px;
}
.zw2{
    padding: 20px 0;
    text-align: center;
}
.zw2 img{
    height: 24px;
}
.zw3{
    box-shadow: 0 0 13px #ebebeb;
    margin: 0 13px;
    padding: 15px 29px 15px 10px;
    justify-content: space-between;
    display: flex;
    -webkit-box-pack: justify;
}
.zw4{
    display: flex;
    -webkit-box-align: center;
    align-items:center;
}
.zw4>.sp1{
    margin-left:0;
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
.zw4>.sp2{
    color: #8c8c8c;
    font-size: 14px;
}
.zw5{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
}
.zw6{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.zw6>i{
    background: url(../img/18.png) no-repeat;
    background-size: contain;
    width: 16px;
    height: 18px;
}
.zw6>.zw7{
    font-size: 13px;
    margin-left: 8px;
}
.zw6>.zw7>a{
    text-decoration: none;
    color: #757575;
}
</style>