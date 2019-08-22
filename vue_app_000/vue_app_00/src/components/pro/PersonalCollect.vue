<template>
<!-- 我的收藏9 -->
    <div class="PCollect">
         <div class="list" v-for="(item,index) in resuls" :key="index" >
             <div class="details" @click="tzz(item.cid)">
                <h4>
                    <span>{{item.title}}</span>
                    <span class="colorpirce">【{{item.salary}}】</span>
                     <span class="f-right">{{aaa(item.time)}}</span> 
                </h4>
                <div >
                    <p class="font-16">{{item.province}}省-{{item.cantonal}}市 | {{item.experience}} | {{item.education}}</p>
                    <div class="d-flex">
                    <p>{{item.cname}}</p>
                    <img :src="'http://127.0.0.1:3000/'+item.pic"> 
                    </div>
                </div>
            </div> 
            <div class="operation">
                <div @click="callcollect(item.coid)"><span class="iconfont icon-aixin" ></span> 取消收藏</div>
                 <div class="border"><span class="iconfont icon-tijiaowendang"></span> 投资简历</div> 
            </div>
        </div>     
    </div>
</template>
<script>
export default {
    data() {
        return {
            resuls:null,
        }
    },
    methods:{
        callcollect(coid){                     //点击按钮取消收藏
          var url="personalcollect"
           var obj={coid,uid:sessionStorage.getItem("uid")};
           this.axios.get(url,{params:obj}).then(
               res=>{
                this.resuls=res.data.data
            })
    },
        aaa(time){//具体时间函数
          var a=new Date(Number(time))     //转化为标准时间格式
              a = a.toLocaleString();      //转化为标准时间格式
              a=a.split(" ")[0]            //分割 获得数组 只要前面的2019/8/19
            return a;
        },
        tzz(cid){//跳转相应的公司详情页
            this.$router.push(`/deta1?id=${cid}`)
        },
        //发送ajax
       databa(){
           var url="personalcollect"
           var obj={uid:sessionStorage.getItem("uid")};
           this.axios.get(url,{params:obj}).then(
               res=>{
                console.log(res)
                this.resuls=res.data.data
            })
       } 
    },
    created() {
        this.databa()
    },
       

}
</script>
<style scoped>
.PCollect .list{
    background: #fff;
    margin-bottom:10px; 
}
.PCollect .details{
    padding:16px;
    height:124px;
    border-bottom:1px solid #c8c8c8 ;
} 
.PCollect .details img{
    width:82px;
    height:42px;
}
.PCollect .f-right{
    float: right;
    font-size:12px;
    color: #ccc; 
    line-height: 18p;
}
.PCollect .colorpirce{
    color:#e63038;
}
.PCollect .d-flex{
    display: flex;
    justify-content: space-between;
}
.PCollect .d-flex>p{
    margin: 0;
}

.PCollect .font-16{
    font-size:16px;
}

.PCollect .operation{
    height:40px;
    padding:6px 0;
    display: flex;
    justify-content: space-between;
} 
.PCollect .operation>div{
    text-align: center;
    line-height: 28px;
    width:50%;
    height:28px;
    font-size: 13px;
}
.PCollect .icon-aixin{
    color: #e63038;
    font-size:20px;
}
.PCollect .icon-tijiaowendang{
    font-size:20px;
}
.PCollect .border{
    border-left: 1px solid #c8c8c8;
}

</style>