<!-- 应聘记录 -->
<template>
    <div class="PRecord">
        <div @click="tab" class="PRecord-list">
            <div data-id="qb1" class="list-active">全部</div>
            <div data-id="td2">投递</div>
            <div data-id="ck3">已查看</div>
            <div data-id="gt4">待沟通</div>
            <div data-id="ms5">面试</div>
            <div data-id="nohs6">不合适</div>
        </div>
        <div class="wudata" >
        <img id="aa" src="../../assets/zwsj.png" alt="">
        </div>
    <mt-tab-container v-model="active" >
        <mt-tab-container-item id="qb1">
            全部
        </mt-tab-container-item> 
        <mt-tab-container-item id="td2">
            投递
        </mt-tab-container-item>
        <mt-tab-container-item id="ck3">
            已查看
        </mt-tab-container-item>
        <mt-tab-container-item id="gt4">
            待沟通
        </mt-tab-container-item>
        <mt-tab-container-item id="ms5">
            面试
        </mt-tab-container-item>
        <mt-tab-container-item id="nohs6">
            不合适
        </mt-tab-container-item>
    </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"qb1",
        }
    },
    methods: {
        tab(e){
            if(e.target.dataset.id){
                var divlists=document.querySelectorAll(".PRecord-list>div")
                var divlist=e.target;
                this.active=divlist.dataset.id;
                for(var elem of divlists){  //清除所有css
                    elem.className=""
                }
                divlist.className="list-active";//此时添加css
            }
        }
    },
}
</script>
<style scope>
/* 暂无数据图片 */
.PRecord .wudata{
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0 ;
}  
.PRecord-list{
    display: flex;
    justify-content: space-around;
    background:#fff;
    height:38px;
}
.PRecord-list div{
    font-size: 13px;
    text-align: center;
    line-height: 38px;
    width:16%;
    margin:0 2% ;
  
}
.PRecord-list div.list-active{
   border-bottom:3px solid red; 
}
</style>
