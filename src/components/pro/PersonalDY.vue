<template>
  <!-- 我的订阅10 -->
  <div class="PersonalDY">
    <div class="details">
      <div>
        <div>订阅标题</div>
        <div>
          <input type="text"
                 placeholder="请输入订阅器标题">
        </div>
      </div>
      <div>
        <div>接收邮箱</div>
        <div>
          <input type="text"
                 placeholder="请输入订阅器标题">
        </div>
      </div>
      <div>
        <div>发送周期</div>
        <div class="divzq">
          <button class="btnzq">5天</button>
          <button class="btnzq">10天</button>
        </div>

      </div>
      <div>
        <div>岗位类别</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>行业类别</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>工作地点</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>发布时间</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>公司规模</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>月薪范围</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>工作经验</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div>
        <div>学历要求</div>
        <div>
          <input type="text"
                 placeholder="请选择">
          <span class="iconfont icon-dayufuhao"></span>
        </div>
      </div>
      <div class="bg-none"></div>
    </div>
    <div class="btn">
      <mt-button class="btn1">重置</mt-button>
      <mt-button class="btn2">保存</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    sessionStorage.setItem("i", 10);
  },
}
</script>
<style scoped>
.PersonalDY .details .divzq {
  text-align: right;
  width: 40%;
}
.PersonalDY .details .btnzq {
  padding: 0;
  margin: 12px 0 0 10px;
  width: 30%;
  height: 30px;
}
.PersonalDY .details .btnzq:hover {
  background: #e63038;
  color: #fff;
}
.PersonalDY .bg-none {
  background-color: #efeff4 !important;
  border: 0 !important;
  height: 10px !important;
}
.PersonalDY .btn {
  background: #efeff4;
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 10px 10% 10px;
}
.PersonalDY .btn .btn1 {
  color: #e63038;
  font-size: 10px;
  width: 45%;
  margin-right: 10%;
}
.PersonalDY .btn .btn2 {
  background-color: #e63038;
  color: #fff;
  font-size: 10px;
  width: 45%;
}
</style>