<!--底部导航栏图片样式 2选一-->
<template>
  <div>
    <!-- 图片2选一 -->
    <img :src="focused?selectedImage:normalImage"
         alt=""
         class="imgstyle" />
  </div>
</template>
<script>
export default {
  props: {
    focused: false,
    selectedImage: { default: "" },
    normalImage: { default: "" }
  }
}
</script>
<style scoped>
.imgstyle {
  width: 30px;
  height: 30px;
}
</style>





























