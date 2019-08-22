<!-- 分类 -->
<template>
<!-- 职位搜索4 -->
  <div class="content">
    <!-- 顶部搜索框 -->
    <!-- 陶铸 -->
    <div class="query">
      <div class="searchwrap">
          <span class="icon">
            <input class="input1" type="text" placeholder="输入职位或公司">
          </span>
      </div>
      <span style="float:right" class="cancle">搜索</span>
    </div>
    <!-- 选择框  -->
  <div>
    <div @click="tab" class="PRecord-list" style="position:dixed">
      <div data-id="qb1" class="list-active">全国
        <span><img src="../../assets/003.png"></span>
      </div>
      <div data-id="td2">行业
        <span><img src="../../assets/003.png" ></span>
      </div>
       <div data-id="ck3">薪资
        <span><img src="../../assets/003.png" ></span>
        </div>
         <div data-id="gt4">更多
        <span><img src="../../assets/003.png" ></span>
      </div>
      </div>
      <div style="clear:both"></div>
    <div id="fugai" v-show="play">
     <mt-tab-container v-model="active" class="none">
       <mt-tab-container-item id="qb1">
         <ul>
           <li>热门城市</li>
           <li>广东省</li>
           <li>所有身份</li>
         </ul>
       </mt-tab-container-item>
       <mt-tab-container-item id="td2">
         <ul>
           <li>用途属性分类</li>
           <li>材质风格分类</li>
           <li>其他分类</li>
         </ul>
       </mt-tab-container-item>
       <mt-tab-container-item id="ck3">
         <ul>
           <li>2k以下</li>
           <li>2k-5k</li>
           <li>5k-10k</li>
         </ul>
         <ul>
           <li>10k-15k</li>
           <li>15k-20k</li>
           <li>20k-25k</li>
           <ul>
             <li>25k</li>
             <li>50k以上</li>
           </ul>
         </ul>
       </mt-tab-container-item>
       <mt-tab-container-item id="gt4">
         <ul>
           <li>1111</li>
           <li>222222</li>
           <li>333333</li>
         </ul>
       </mt-tab-container-item>
     </mt-tab-container>
     </div>
  </div>
  <!-- 中间内容 -->
         <div class="k1" v-for="(item,index) in list" :key="index" @click="ttzhuan(item.cid)">
          <div class="k2">
              <div class="k3">
                  <span>所属部门：市场营销部</span>
                  <span>{{aaa(item.time)}}</span>
              </div>
              <div class="k4">{{item.title}}</div>
              <div class="k5">{{item.salarry}}</div>
              <div class="k6">
                  <span>{{item.education}}</span>
                  <span>{{item.experience}}</span>
                  <span>{{item.cantonal}}</span>
                  <span>22-35岁</span>
              </div>
              <a href="javascript:;" class="k7">
                  <img :src="'http://127.0.0.1:3000/'+item.pic">
                  <div class="k8">
                      <div class="k9">{{item.cname}}</div>
                      <div class="k10">
                          <span>实木家具,板式家具,软体家具</span>
                          <span class="k11">200-500人</span>
                      </div>
                  </div>
                  <span class="k12"></span>
              </a>
          </div>
          <div></div> 
      </div> 
      <div id="fenlei-last"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    active:"qb1",
    play:false,
    list:[]
    }
  },
  created(){ 
        sessionStorage.setItem("i",4);
    },
  methods: {
    ttzhuan(cid){
this.$router.push("/deta1?id="+cid)
    },
    aaa(time){//具体时间函数
          var a=new Date(Number(time))     //转化为标准时间格式
              a = a.toLocaleString();      //转化为标准时间格式
              a=a.split(" ")[0]            //分割 获得数组 只要前面的2019/8/19
            return a;
      },
     handleClose: function(){
  		console.log("返回")
    },
    tab(e){
    if(e.target.dataset.id){
    //  console.log(e.target.dataset.id)
      if(this.active==e.target.dataset.id){
        this.play=!this.play
        }else{
        this.play=true
        }
    var divlists=document.querySelectorAll(".PRecord-list>div")
    var divlist=e.target;
    this.active=divlist.dataset.id;
    for(var elem of divlists){ //清除所有css
    elem.className=""
      }
    divlist.className="list-active";//此时添加css
      }
  },
  datas(){
    var url="fenlei"
    this.axios.get(url).then(
     res=>{
      if(res.data.code>0){
       this.list=res.data.data;
        //console.log(this.list)
          }else{
           this.$toast({message:res.data.msg})
          }
        })
      }
},
mounted() {
  this.datas()
},
}

</script>
<style scoped>
 *{margin: 0;padding: 0}
  li{list-style: none}
  a{text-decoration: none;color: #464646}
 
  .query{
    width: 100%;
    height: 62px;
    border-bottom: 1px solid #dedede;
  }
  .searchwrap{
    display: flex;
    flex:1;
    height:40px;
    margin-top:9px;
    background: #f5f8f9;
    color:#bcccd2;
    border: 1px solid #bcccd2;
    margin-left: 10px;
    margin-bottom:9px; 
    width:73%
  }
  .icon{
    background-image: url("../../assets/sousuo.png"); 
    background-size: 20px 20px;
    background-repeat: no-repeat; 
    padding-left: 40px;
    margin-left: 7px;
    background-position-y: center
  }
  .input1{
    height: 34px;
    background: #f5f8f9;
    margin-top:0px;
    padding: 2px 0;
    color: #464646;
    line-height: 42px;
    text-indent: 2px;
    border: 0px;
    outline: none;
  }
  /* 搜索 */
  .cancle{
    height: 40px;
    width: 20%;
    padding: 0 12px;
    line-height: 40px;
    display: block;
    text-align: center;
    margin-top: 9px;
    font-size: 16px;
    background: #f84646;
    color: #fff;
    border-radius: 2px;
    margin-right:3%
  }
  .searchwrap, .icon1{
    float: left;
  }
  /* 下拉选 */
  .none{background-color: #f7f7f7}
  .none ul li{
    display: flex;
    float: left;
    width: 32%;
    height: 50px;
    margin-right: 1%;
    align-items: center;
    justify-content: center;
   /*border-top:2px solid red;*/
  }
  #fugai{
    height: 100%;
  }


 /* 中间内容 */
 .PRecord-list div{
   display: flex;
   float: left;
   font-size: 14px;
   width: 90px;
   height: 40px;
   align-items: center;
   justify-content: center;
   color: #464646;
   }
 .PRecord-list div img{
   width: 12px;
   height: 13px;
   margin-left: 7px;
   font-size:#000;
   margin-top: 4px
   }
 .list ul{display: flex;
   height: 50px;
   clear: both;
   background: #f7f7f7;
   }
.list ul li{
  display: flex;
  float: left;
  width: 32%;
  height: 52px; 
  align-items: center;
  justify-content: center;}



.k1{
    background-color: #fff;
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
    background: url(../../assets/002.png) no-repeat;
    width: 15.5px;
    height: 13.5px;
    background-size: contain;
    margin-left: 10px;
}
 .mint-header{
    background-color:#e63038;
    }
    .mint-tab-item-label {
    width: 258px;
    margin-top: 15px;
    background: #e63038;
    border: 1px solid #e63038;
    color: #fff;
    height: 42px;
    line-height: 42px;
    border-radius: 2px;
    font-size: 14px;
    text-align: center;
    margin: auto auto 8px;
}
.fenlei-last{
  margin-bottom: 58px;
}
</style>
