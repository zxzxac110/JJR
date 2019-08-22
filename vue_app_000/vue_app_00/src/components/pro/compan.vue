<template>
<!-- 公司介绍2 -->
<div>
    <!-- 这是主体 -->
        <!-- 轮播图 -->
    <div style="height:195px">
        <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="../img/l1.jpg" height="192" width="100%" >
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../img/l2.jpg" height="192"  width="100%" >
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../img/l3.jpg" height="192" width="100%" >
        </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 公司介绍 -->
    <div class="dd d1">
        <div class="dd d2">
            <img src="../img/20.png" alt="">
            <span>企业资料</span>
        </div>
        <div class="dd d3">
            <img src="../img/22.png" alt="">
            <span>满怀信心，大步前进，将企业进一步做强做大。</span>
        </div>
        <div class="dd d4">
            <img src="../img/21.png" alt="">
            <span>http://www.today-f.com</span>
            <a href="http://www.today-f.com">点击查看</a>
        </div>
        <div class="dd d5">
            <span>提供住宿</span>
            <span>五险一金</span>
            <span>绩效奖金</span>
        </div>
        <div class="dd d6">
            <div class="da d7">  
                今日美家家具有限公司是一家集产品开发、设计、销售为一体的综合型家具制造企业，专业生产经营中高档板式套房、金属家具，下设两面个分厂，板式厂、五金厂。通过近几年的飞速发展，营销网络遍布港、澳、台和中国内陆，远销日本、美国、欧洲、澳洲、东南亚等国家和地区。
　　今日美家家具有限公司成立以来，吸引一批优秀的专家、杰出的专业管理人才和一支高素质的员工队伍，拥有从德国、意大利等国家进口的世界先进生产设备，在产品设计上，经过充分的调查评估和论证，结合人体功效学、承我国传统家具之精华、吸收欧美先进的工艺技术和现代设计理念，坚持开发独具特色、贴近用户、领先市场潮流。在以质量为本、创新为魂的经营理念指导下不断开拓创新，先后成功的推出了黑檀雍华套房系列，彩色套房、金属系列，浅胡桃套房四大系列以其款式时尚，简约、大气、深受消费者青睐。 
　　后起之秀一金属家具系列；她简约、时尚、亮丽、耐用等特点，更是现代人居室最佳选择，在产品成功的同时，曾先后被中国中轻产品质量保障中心评为《中国名优产品》、《消费者放心产品（品牌）》、《中国优秀绿色环保产品》、《质量信誉诚信（经营）示范单位》等殊荣。
　　今天，今日美家人以：敬业、进取、兴民族家具工业的坚定信念，将通过新的运营模式，通过战略调整和管理整合，参与新一轮家具市场竟争，满怀信心，大步前进，将企业进一步做强做大。
            </div>
            <p>
                <i></i>
            </p>

        </div>
        <div class="dd d9">
            <div class="dd d10">
                <img src="../img/24.png" alt="">
                <span>公司地址</span>
            </div>
            <div class="dd d11">
                <div class="dd d12">
                    <span id="dd1"></span>
                    <span id="dd2">广东省佛山市顺德区佛山市顺德区乐从镇水藤北围工业区(水藤加油站对面直入400米)</span>
                </div>
                <div class="dd d13">
                    <span class="dd d14">查看地图</span>
                    <span class="dd d15"></span>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
export default {
    data(){
        return{
            list:[]//数据库传来的数据
        }
    },
    methods: {
    
    },
}
</script>
<style scoped>
.mint-header{
    background-color:#e63038;
    z-index:1000;
    top:0px;
    width:100%;
    position:fixed;
}
*{
   margin: 0;
    padding: 0;
    border: 0;
}
.d1{
    margin-bottom:10px;
    padding-top:24px;
    background:#fff;
    font-size:16px;
   
    font-weight: 400;
    vertical-align: baseline;
}
.d2{
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
}
.d2 img{
    width:22px;
}
.d2 span{
    color:#242424;
    font-size:22px;
    margin-left:8px;
}
.d3{
    margin-top: 22px;
    padding-right: 14px;
    padding-bottom: 10px;
    margin-left: 14px;
    display: flex;
    border-bottom: 1px solid #eee;
}
.d3 img{
    width: 15px;
    height: 15px;
    margin-top: 4px;
    margin-right: 11px;
}
.d3 span{
    color: #414141;
    font-size: 14px;
    line-height: 24px;
}
 .d4{
     margin-top:12px;
     padding-right:14px;
     padding-bottom:10px;
     margin-left:14px;
     display: flex;
     border-bottom:1px solid #eee;
     align-items:center;
 }
 .d4 img{
     width:15px;
     height:15px;
     margin-right:11px;
     margin-top:2px;
 }
 .d4 span{
     color:#414141;
     font-size:14px;
     flex:1;
     overflow:hidden;
     white-space: nowrap;
     text-overflow:ellipsis;
 }
 .d4 a{
     color:#757575;
     font-size:12px;
     margin-left:10px;
     text-decoration:none;
 }
 .d4 a::after{
     content:"";
     background:url(../img/23.png) no-repeat;
     display: inline-block;
     width:10px;
     height:10px;
     background-size:contain;
     margin-left:7px;
 }
 .d5{
     padding:4px 14px 28px;
     display: flex;
     flex-wrap: wrap;
 }
 .d5 span{
    background-color: #757575;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-right: 10px;
    margin-top: 14px;
    position: relative;
 }
 .d5 span::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-color: transparent transparent #fff #fff;
    border-style: solid;
    border-width: 12px 3px;
 }
 .d5 span::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-color: #fff #fff transparent transparent;
    border-style: solid;
    border-width: 12px 3px;
 }
 .d6{
     background:#fff;
     padding-bottom:0;
     position:relative;
 }
 .d7{
     overflow:hidden;
     text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    width: 96%;
    position: relative;
    margin: 0 auto;
    font-size: 14px;
    height: auto;
    color: #414141;
    line-height: 24px;
}
.d6 p{ 
     text-align:center;
     font-size:13px;
     color:#c8c8c8;
     margin-right:6px;
     margin-top:6px;
     height:40px;
     line-height:40px;
}
.d6 p i{
    font-family: cube-icon!important;
    font-size: 100%;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    transform: rotate(270deg);
    display: inline-block;
    cursor: pointer;
}
.d6 p i::before{
    content:"\E608";
}
.d9{
    background-color:#fff;
    padding-top:24px;
    margin-bottom:10px;

}
.d10{
    display: flex;
    align-items:center;
    justify-content: center;
    position:relative;

}
.d10 img{
    width:18px;
}
.d10 span{
    color:#242424;
    font-size:22px;
    margin-left:8px;
}
.d11{
    display: flex;
    justify-content: space-between;
    padding:23px 15px;
}
.d11 #dd1{
    background: url(../img/25.png) no-repeat;
    width: 13px;
    height: 14px;
    background-size: contain;
    display: inline-block;
    position: relative;
    top: 2px;
}
.d11 #dd2{
    color: #414141;
    font-size: 14px;
    line-height: 24px;
}
.d13{
    white-space: nowrap;
    margin-top: 3px;
    margin-left: 10px;
}
.d14{
    color:#757575;
    font-size:12px;
}
.d15{
    background: url(../img/16.png) no-repeat;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-size: contain;
    white-space: nowrap
}
</style>
