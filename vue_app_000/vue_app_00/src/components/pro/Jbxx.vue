<template>
<!-- 基本信息6 -->
  <div class="l_cube">
    <div style="position:relative;z-index:0">
      <main>
        <div class="l_Info">
          <div class="l_avatr">
            <img src="../../assets/touxiang.png" alt="">
          </div>
          <div class="l_main">
            头像编辑
          </div>
          <input type="file" accept="image/png,image/jpeg,image/gif,image/jpg" class="l_uplo">
          <i class="iconfont l_dayu">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">姓名</span>
          <input type="text" class="l_right" placeholder="请输入简历上的姓名">
        </div>
        <div class="l_ipt">
          <span class="l_text">邮箱</span>
          <input type="text" class="l_right" placeholder="请输入邮箱号码">
        </div>
        <div class="l_ipt">
          <span class="l_text">QQ</span>
          <input type="text" class="l_right" placeholder="未填写">
        </div>
        <div class="l_ipt">
          <span class="l_text">身高</span>
          <input type="text" class="l_right" placeholder="未填写">
        </div>
        <div class="l_ipt">
          <span class="l_text">出生日期</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">参加工作时间</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">性别</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">婚姻状况</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">最高学历</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">籍贯</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_ipt">
          <span class="l_text">现所在地</span>
          <input type="text" class="l_right" readonly="readonly" placeholder="请选择">
          <i class="iconfont l_dayuh">&#xe65f;</i>
        </div>
        <div class="l_textare">
          <h3 style="font-weight:normal;height:30px;margin:0;" class="l_text">自我介绍</h3>
          <textarea style="margin:0" name id cols="30" rows="10"></textarea>
          <p class="l_canW">还可以输入15字</p>
        </div>
      </main>
      <div style="text-align: center;">
        <div class="l_primary">
          保存
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  created(){ 
        sessionStorage.setItem("i",6);
    },
}
</script>
<style scoped>   
p{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
div{
  display: block;
  font-size: 16px;
}
.l_cube{
  margin-top:40px; 
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f8f9;
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px; 
}
.l_Info{
  height: 86px;
  background: #fff;
  border-bottom: 1px solid #dedede;
  width: 100%;
  position: relative;
  display: flex; 
}
.l_avatr{
  width: 60px;
  height: 60px;
  margin-left: 15px;
  margin-right: 14px;
  border-radius: 50%;
  margin-top: 12px;
  float: left;
  position: relative;
}
.l_avatr img{
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.l_main{
  flex: 1;
  height: 60px;
  margin-top: 10px;
  line-height: 60px;
  float: left;
}
.l_uplo{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.l_dayu{
  color: #797979;
  line-height: 80px;
}
.l_ipt{
  height: 54px;
  line-height: 54px;
  background: #fff;
  margin-bottom: 1px;
  padding-left: 16px;
  position: relative;
  display: flex;
}
.l_text{
  vertical-align: middle;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
}
.l_right{
  text-align: right;
  flex: 4;
  margin-top: 13px;
  margin-right: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  
  height: 28px;
  line-height: 28px;
  color: #464646;
  text-indent: 8px;
  outline: none;
  vertical-align: middle;
  font-size: 13px;
  border:none;
}
.l_textare{
  padding: 12px 16px 0;
  height: 110px;
  background: #fff;
  font-size: 13px;
  vertical-align: baseline;
}
.l_textare textarea{
  width: 100%;
  color: #464646;
  font-size: 13px;
  height: 44px;
  border: none;
  resize: none;
  margin-bottom: 10px;
  padding: 0;
}
.l_canW{
  text-align: right;
  color: #8c8c8c;
  font-size: 12px; 
  margin: 0;
}
.l_primary{
  width: 90%;
  height: 42px;
  line-height: 42px;
  background: #e63038;
  position: fixed;
  bottom: 0;
  border: 1px solid #e63038;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  margin:32px 18px 8px;
}
.l_dayuh{
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 15px;
  color: #c8c8c8;
}
</style>