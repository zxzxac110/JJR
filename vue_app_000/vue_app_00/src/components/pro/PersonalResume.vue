<!-- 简历编辑 -->
<template>
    <div class="PersonalResume">
        <div class="d-flex">
            <mt-progress :value="progress" class="progress">
                <div slot="end">{{progress}}%</div>
            </mt-progress>
            <mt-button class="btn">预览</mt-button>
        </div>
        <div class="personal-to1">
            <div class="portrait">
                <img src="../img/01.png" alt="">
            </div>
            <div class="personal-to1-gr">
                <div>刘志祥<span>男</span></div>
                <div class="personal-to1-letter">长沙东塘第一帅</div>
            </div>
        </div>
        <div class="PersonalDY">
            <div class="details">
                <div>
                    <div><i class="regbor"></i>求职意向</div>
                    <div>
                        <input type="text" value="">
                        <span class="iconfont icon-dayufuhao"></span>
                    </div>
                </div>
                <div>
                    <div><i class="regbor"></i>自我评价</div>
                    <div>
                        <input type="text" value="">
                        <span class="iconfont icon-dayufuhao"></span>
                    </div>
                </div>
                <div>
                    <div><i class="regbor"></i>简历标签</div>
                    <div><!-- 点击此处跳转 -->
                        <input type="text" value="">
                        <span class="iconfont icon-dayufuhao"></span>
                    </div>
                </div>
            </div>  
                <div class="live">
                   <div><i class="regbor not abs"></i>教育经历</div>
                   <div class="live-t2">
                       <div>清华</div>
                       <div>
                       <span class="mr-10">2007.01-2010.01</span>	    
                       <span class="iconfont icon-dayufuhao"></span>
                       </div>
                   </div>
                   <div class="live-t3">
                        <span class="jia">+</span>
                        <span>添加新经历</span> 
                   </div>
                </div>
                <div class="live">
                   <div><i class="regbor not abs"></i>工作经历</div>
                   <div class="live-t2">
                       <div>清华</div>
                       <div>
                       <span class="mr-10">2007.01-2010.01</span>	    
                       <span class="iconfont icon-dayufuhao"></span>
                       </div>
                   </div>
                   <div class="live-t3">
                        <span class="jia">+</span>
                        <span>添加新经历</span> 
                   </div>
                </div>
                <div class="live">
                   <div><i class="regbor not abs"></i>项目经历</div>
                   <div class="live-t2">
                       <div>清华</div>
                       <div>
                       <span class="mr-10">2007.01-2010.01</span>	    
                       <span class="iconfont icon-dayufuhao"></span>
                       </div>
                   </div>
                   <div class="live-t3">
                        <span class="jia">+</span>
                        <span>添加新经历</span> 
                   </div>
                </div>
                <div class="live">
                   <div><i class="regbor not abs"></i>职业技能</div>
                   <div class="live-t2">
                       <div>清华</div>
                       <div>
                       <span class="mr-10">2007.01-2010.01</span>	    
                       <span class="iconfont icon-dayufuhao"></span>
                       </div>
                   </div>
                   <div class="live-t3">
                        <span class="jia">+</span>
                        <span>添加新经历</span> 
                   </div>
                </div>
        </div>
    </div>
</template>
<script>
console.log(document.querySelector(".PersonalResume"))
export default {
    data(){
        return{
            progress:20//进度条数字
        }
    }, 
    methods: {
        
    },
    mounted(){ //加载后改变进度条的颜色
        document.querySelector(".mt-progress-progress").style.background="#e63038"
    },	
}
</script>
<style scoped>
@import url("../../css/mypersonal.css");
.PersonalResume .d-flex{
    background: #fff;
    display: flex;
}
.PersonalResume .btn{
    margin:15px; 
    font-size:12px;
    width:15%;
    height:30px;
    color: #fff;
    background: #e63038;
    border-radius:4px; 
}
.PersonalResume .progress{
    margin:15px;
    width:80%;
}  
.PersonalResume .personal-to1{
    margin-top:10px; 
    border-bottom: 1px solid #999;
    background: #fff;
}
.PersonalResume  .regbor{
    display:inline;
    border-left:3px solid #e63038;
    margin-right:5px;
}
.PersonalResume .regbor.not{
    display:inline-block;
}
.PersonalResume .live{
    line-height: 54px;
    color: 16px;
    position: relative;
    padding: 0 5%;
    background: #fff;
    margin-bottom:5px; 
}
.PersonalResume .live .abs{
    display: inline;
}
.PersonalResume .live-t2{
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #c8c8c8;
    font-size:13px;
}
.PersonalResume .live-t2 div{
    color:#888888;
}
.PersonalResume .mr-10{margin-right:10px}
.PersonalResume .live-t3{
    margin-right:10px;
    text-align: center;
    font-size:13px;
}
.PersonalResume .jia{
    display: inline;
    background: #e63038;
    color: #ffffff;
    margin-right:5px;
    font-weight: 100; 
    font-size: 14px;
    border: 1px solid #e63038;
    border-radius: 50%
}
</style>