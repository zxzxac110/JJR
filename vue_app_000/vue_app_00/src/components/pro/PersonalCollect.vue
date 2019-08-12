<template>
    <div class="PCollect">
        <div class="list">
            <div class="details ">
                <h4>
                    <span>家具导购</span>
                    <span class="colorpirce">【5k-10k】</span>
                    <span class="f-right">2019-08-10</span>
                </h4>
                <div >
                    <p class="font-16">广东省-东莞市|1-3年经验|中专</p>
                    <div class="d-flex">
                    <p>广州扩樊家具有限公司</p>
                    <img src="../img/01.png" alt="">
                    </div>
                </div>
            </div>
            <div class="operation">
                <div><span class="iconfont icon-aixin"></span> 取消收藏</div>
                <div class="border"><span class="iconfont icon-tijiaowendang"></span> 投资简历</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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