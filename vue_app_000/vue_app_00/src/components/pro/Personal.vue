<!-- personal -->
<template>
    <div class="personal">
        <div class="personal-to1">
            <div class="portrait">
                <img src="../img/01.png" alt="">
            </div>
            <div class="personal-to1-gr">
                <div>刘志祥<span>男</span></div>
                <div class="personal-to1-letter">长沙东塘第一帅</div>
            </div>
        </div>
        <div class="personal-to2">
            <div>
                  <span>0</span> 
                  <br>
                被查看
                </div>
            <div>
                <span>0</span> 
                 <br>
                待沟通
            </div>
            <div>
                <span>0</span>    
                <br>
                面试
            </div>
        </div>
        <div class="personal-to3">
            <div>
                <mt-button  @click="login" class="seek">输入职位或公司</mt-button>
            </div>
            <div class="imgdiv">
                <img src="../../assets/ss.png" alt="">
            </div>
        </div>
        <div class="personal-to4">
            <div>
                <div>
                <img src="../../assets/text.png" alt="">
                </div>
                我的简历
                <span>></span>
            </div>
            <div>
                <div>
                <img src="../../assets/time.png" alt="">
                </div>
                应聘记录
                <span>></span>
            </div>
            <div>
                <div>
                <img src="../../assets/xing.png" alt="">
                </div>
                职业收藏
                <span>></span>
            </div>
        </div>
        <div class="personal-to5">
            <div>
                <div>
                <img src="../../assets/dingyue.png" alt="">
                </div>
                我的订阅
                <span>></span>
            </div>
            <div>
                <div>
                <img src="../../assets/shez.png" alt="">
                </div>
                账号设置
                <span>></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.personal div{
    background:#fff
}

.personal-to1{
    display: flex;
    height:88px;
}
.personal-to1 .portrait{
    width:68px;
    height:88px;
    padding: 20px 10px;
}
.personal-to1-gr{
    padding: 20px 10px;
}
.personal-to1-gr span{
    color: #999;
    margin-left:10px;
    padding-left:10px;
    border-left:1px solid #888;
    font-size: 14px; 
}
.personal-to1-letter{
    font-size: 14px; 
    color: #999;
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

