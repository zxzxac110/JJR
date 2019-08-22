<!-- personal 个人中心 -->
<template>
<!-- 个人中心8 -->
    <div class="personal">
        <div class="personal-to1" @click="jbxx">
            <div class="portrait">
                <img src="../img/01.png" alt="">
            </div>
            <div class="personal-to1-gr">
                <div>{{msg.nickname}}<span>{{msg.sex==0?"女":"男"}}</span></div>
                <div class="personal-to1-letter">{{msg.station}}</div>
            </div>
        </div>
        <div class="personal-to2" @click="perRed">
            <div data-id="2">
                  <span data-id="2">0</span> 
                  <br>
                被查看
                </div>
            <div data-id="3">
                <span data-id="3">0</span> 
                 <br>
                待沟通
            </div>
            <div data-id="4">
                <span data-id="4">0</span>    
                <br>
                面试
            </div>
        </div>
        <div class="personal-to3" @click="fenlei">
            <div>
                <mt-button   class="seek">输入职位或公司</mt-button>
            </div>
            <div class="imgdiv">
                <img src="../../assets/ss.png" alt="">
            </div>
        </div>
        <div class="personal-to4">
            <div @click="tx(4)">
                <div>
                <img src="../../assets/text.png" alt="">
                </div>
                我的简历
                <span class="schedule">20%</span>
                <span class="iconfont icon-dayufuhao"></span>
            </div>
            <div @click="tx(3)">
                <div>
                <img src="../../assets/time.png" alt="">
                </div>
                应聘记录
                <span class="iconfont icon-dayufuhao"></span>
            </div>
            <div @click="tx(2)">
                <div>
                <img src="../../assets/xing.png" alt="">
                </div>
                职业收藏
                <span class="iconfont icon-dayufuhao"></span>
            </div>
        </div>
        <div class="personal-to5">
            <div @click="tx(1)">
                <div>
                <img src="../../assets/dingyue.png" alt="">
                </div>
                我的订阅
                <span class="iconfont icon-dayufuhao"></span>
            </div>
            <div @click="tx(0)">
                <div>
                <img src="../../assets/shez.png" alt="">
                </div>
                账号设置
                <span class="iconfont icon-dayufuhao"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            txarr:["personalset","personaldy","personalcollect","personalrecord","personalresume"],
           // personal:[],//头部信息变量
        }
    },
    methods:{
       tx(a){  
       this.$router.push(`/${this.txarr[a]}`) 
       },
       jbxx(){
       this.$router.push("/jbxx") 
       },
       perRed(e){
           var id=e.target.dataset.id
           this.$router.push(`/personalrecord?id=${id}`) 
       },
       fenlei(){//跳转分类详情页.待做
            this.$router.push(`/fenlei`) 
       },
    /*   chang(){   
           console.log("调用chang")
        var uid=sessionStorage.getItem("uid");
        if(uid){
        var url="personal"
        var obj={uid}
         this.axios.get(url,{params:obj}).then(  //获取头部数据
            res=>{
                if(res.data.code>0){
                    this.personal=res.data.data[0]
                }else{
                    this.$toast({message:res.data.msg})//输出弹窗数据
                }
            })
          }
       },*/
    },  
    props:{                 //申明接受父组件数据
        msg:{default:""}    //得到的头部发送过来的AJAX数据
    }
}
</script>
<style scoped>
@import url("../../css/mypersonal.css");
.personal div{
    background:#fff
}
.personal-to2{
    display: flex; 
    justify-content: space-between;
    border-top:1px solid #c8c8c8; 
    padding:15px 0 
}   
.personal-to2 div{
    width:33%;
    text-align: center;
    color:#888;
}
.personal-to2 div>span{
    font-weight:700
}
.personal-to3{
    display: flex;
    margin: 15px 0;
}
.personal-to3 .seek{
    width:100%;
    height:54px;
    background: #fff;
}
.personal-to3 div{
    width:80%;
}
.personal-to3 div.imgdiv{
    width:19%;
    margin-left:1%;
    margin-top:3px; 
    text-align: center;
}
.personal-to4{
    margin-bottom:15px;
}
.personal-to4 .schedule {
    margin-right:20px;
    font-size:14px; 
    font-weight: 400;
    color: #636363; 
}
.personal-to5>div,
.personal-to4>div{
    height:50px;
    line-height: 50px;
    display: flex;
    color:16px;
    position: relative;
    margin:0 5% 
}
.personal-to5 div>div,
.personal-to4 div>div{
    width:10%;
}
.personal-to5 div>span,
.personal-to4 div>span{
    font-weight: 700
}
.personal-to5 img,
.personal-to4 img{
    width:20px;
    height:20px;
    margin-top:13px; 
}
.personal-to5 span,
.personal-to4 span{
    position: absolute;
    right:0px
}
</style>

