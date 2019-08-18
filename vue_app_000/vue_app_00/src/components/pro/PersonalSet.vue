<template>
<!--PersonalSet 用户界面 设置 -->
    <div class="PersonalSet">
        <div>
            <div class="Per">
                <div>
                    账号绑定
                </div>
                <span class="iconfont icon-dayufuhao"></span>
            </div>
            <div class="Per">
                <div>
                    隐私设置
                </div>
                <span class="iconfont icon-dayufuhao"></span>
            </div>
            <div class="Per">
                <div>
                    设置密码
                </div>
                <span class="iconfont icon-dayufuhao"></span>
            </div>
            <div class="Per">
                <div>
                    意见反馈
                </div>
                <span class="iconfont icon-dayufuhao"></span>
            </div>
        </div>
        <mt-button  @click="outreg"  class="PersonalSet-out">退出登录</mt-button>
    </div>
</template>
<script>
export default {
    methods: {
        outreg(){
            sessionStorage.clear();
            this.$router.push("/omg?id=m3");
        }
    },
}
</script>
<style scoped>
.PersonalSet-out{
    margin: 0 2%;
    width:96%;
   background-color:#e63038;
   color: #fff;
   margin-top:60px; 
}  
.PersonalSet .Per{
    height:50px;
    line-height: 50px;
    color:16px;
    display:flex;
    position: relative;
    padding:0 5% ;
    background: #fff;
    border-bottom:1px solid #c8c8c8;
}
.PersonalSet .Per>span{
   margin-right:5%;
   position: absolute; 
   right:0px;
}
</style>