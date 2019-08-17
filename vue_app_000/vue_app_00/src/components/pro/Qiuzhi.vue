<template>
  <div>
    <div class="l_cub">
      <header></header>
      <div class="l_wrapper">
        <main>
          <div>
            <div class="l_iptr">
              <span class="l_text">岗位类别</span>
              <input type="text" placeholder="请选择" readonly="readonly" class="l_ipt">
              <i class="iconfont l_qxz">&#xe65f;</i>
            </div>
            <div class="l_iptr">
              <span class="l_text">行业内别</span>
              <input type="text" placeholder="请选择" readonly="readonly" class="l_ipt">
              <i class="iconfont l_qxz">&#xe65f;</i>
            </div>
            <div class="l_iptr">
              <span class="l_text">职业名称</span>
              <input type="text" placeholder="请输入职位的名称" class="l_ipt">
            </div>
            <div class="l_iptr">
              <span class="l_text">期望薪资</span>
              <input type="text" placeholder="请输入薪资" class="l_iptaaa">
            </div>
            <div class="l_iptr">
              <span class="l_text">工作状态</span>
              <input type="text" placeholder="请选择工作状态" readonly="readonly" class="l_ipt">
              <i class="iconfont l_qxz">&#xe65f;</i>
            </div>
            <div class="l_iptr">
              <span class="l_text">工作地点</span>
              <input type="text" placeholder="请选择" readonly="readonly" class="l_ipt">
              <i class="iconfont l_qxz">&#xe65f;</i>
            </div>
            <div class="l_iptr">
              <span class="l_text">可面议</span>
              <!-- 此组件完成开关的功能 val1状态 -->
              <!-- 当val1值为true为打开状态 -->
              <mt-switch v-model="val1" style=""></mt-switch>
            </div>
          </div>
        </main>
      </div>
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
    return{
      val1:true
    }
  }
}
</script>
<style scoped>
.l_cub{
  margin-top:40px; 
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f8f9;
  overflow: hidden;  
}
.l_wrapper{
  overflow: auto !important;
  width: 100%;
}
.l_iptr{
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
  margin-right: 6px;
  display: inline-blocsk;
  color: #282424;
  width: 62px;
}
.l_ipt{
  margin-bottom: 0;
  padding: 0;
  text-align: right;
  flex: 4;
  margin-top: 13px;
  margin-right: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #464646;
  vertical-align: middle;
  font-size: 13px;
  border: 0;
}
.l_iptaaa{
  margin-bottom: 0;
  padding: 0;
  text-align: right;
  flex: 4;
  margin-top: 13px;
  margin-right: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #464646;
  vertical-align: middle;
  font-size: 13px;
  border: 0;
}
.l_qxz{
  position: absolute;
  top: 6px;
  right: 0;
  padding: 0 15px;
  color: #c8c8c8;
}
.l_inptar{
  width: 25px;
  outline: none;
  border: 0;
  cursor: text;
}
.l_primary{
  width: 90%;
  height: 42px;
  line-height: 42px;
  background: #e63038;
  position: fixed;
  bottom: 169px;
  border: 1px solid #e63038;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  margin:32px 18px 8px;
}
.l_kaig{
  align-self: center;
  flex: 0 0 auto;
  margin-top:5px;
  display: inline-block;
  height: 22px;
  width: 36px;
}
</style>