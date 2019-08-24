<template>
    <div>
 <div class="l_Info" @click.stop="uploadHeadImg" >
          <div class="l_avatr">
            <img :src="userInfo.avatar"  />
          </div>
          <div class="l_main" @click.stop="uploadHeadImg">
            头像编辑
          </div> 
 <input type="file" accept="image/png,image/jpeg,image/gif,image/jpg" class="l_uplo" @change="handleFile" >
</div>
    </div>
</template>
<script>
export default {
  data(){
      return{
            userInfo: {
            avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEeklEQVRoQ9Vay3XbOBR9jxa5HaWCuIOxKxi5AisVRKkg8kLA8WqclQ+pheUKRu5AqSByBaPpIFPBeLa2yZdzZUCHoikRH+V4BksbAO/Fw7vvAzEdYNzc3PSfn59/I6ITEXknIn1mfhCRB2zPzH37N2b+h4hWvV7v/uLiYv3/mMGhiwH68fHxnJlPATRJkuVkMlm67DedTgdVVQ0MsT+zLPsaSsabgDntzzhpIporpVYuoHfNKYrihIhGsEyv17v1JeJFIM/zj0R0VlXV1eXl5fcY4M2119fXx0mSXBHRN631neveTgRw6k9PT1fMvHC9Jq4AmvPM9RplWTZ2sUYnAWviNE2vXDYMBV5fZ/xrxsyzriu6l4AFr5QaHwKY7x5FUcy6/GwngbcGb8l2kWglAIc6Ojoav9XJNy0FEmVZztqEo5VAnudzVyfyvRYh861PaK1HzfWvCOR5vlabLucJARKzBldaRAZaa/jFZmwRMJOGWmvo8X9utB3uFgFcnTYz+TKZTqfnIjIkomO7VkSwt3OA2vXNJsYNAQQQETlWSs19AdcUAynGmJk3wBt7Ie34FHM9i6JA2vHdBtQNAXh6jOoURfEHchpH8kul1Jnj3FfT6ljXBGyqEErAWO+bJ6DTUEuAgM0M1gTyPB9XVbUITdBwL5kZiZ7PwFUKuq4mTg2wfk3gANcHdQAKGuchIl9i1M5i/v8TMHk4tH8rQDgf5YsFQyzwQWu98PlOfS5iQpZlM4YD4h8xeX5RFABy7gOGmc9ivmlxc1NXfUDYuSZC/u6z9hAEqqrqszVFTLESokKxTmyu/mhNIEYNjIqJz+mbuSul1GnAus2SteUPZIEVM//qA0ZE/tVa933W1OfWLTBMkuQhxqFCVIiI7pVSawEJGRsnPoQKhTgxEd2Gpi4gvCFgqp1xjB+YXApS6hqN79M0HUYKx0scOEQqgT0MCfQ9O0eapu9iwNcx22QuWol81Egp1dmP6joFq57WAqOyLJeh2aj9WFEUnXIqIn9prdEPDR6vstHYesAnIsdGYHyrLv0bUx4ooKEiQ2W2b6DfdBt8/IaAFZ16SQmznoQWGT5OHGMF5G54ILHVXLOtElwXmxbgZ8eTDa6Jmzdli4ANzz4xodZCcS3oLUfUEIs0Te9cJbWt9G3rzKEtghPa+fJin5eICF28XS0UR2MQ3tLmVVXd7lPBuvLUN27V43rVX59ce15Cuz04EdvDbF6W5Zc2Irvq9lYCzfTCtNpxv9Ft+xnAtziJyCJJkvlkMvnalM0m+c73ARF5z8wA/hZjKSL3+5rNnS80IrJk5l/eAj1qBmZG/2enP3bmJEaZFr4FSyxhpBxVVQ270ptOAgBifAKW8Kq6QkkAfJZlAxd5dSJQI4GXQ98WohcPEbnzeR1yJlBL2IZ4/iSi917Iuif/jda8b7PLm0DNGogFCHpRDg5HJaIZqiuXK+Mso90H9jLDJFeQWa/OHBFB4/EWF9ShtviCLLCLnPmZALJa/Nxmq+MAOSYi/KplFdMBaX77B0kz0ahNkspqAAAAAElFTkSuQmCC',
            
    }
      }
  },
  methods: {
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('input.l_uplo').click()
    },
    // 将头像显示
    handleFile: function (e) {
      var $target = e.target || e.srcElement
      var file = $target.files[0]
      if(!file){return;}
      var reader = new FileReader()
      reader.onload = (data) => {
      var res = data.target || data.srcElement
       this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)   //编码 
    },
  },

}
</script>
<style>
  .l_uplo{
      display:none;
  }
</style>