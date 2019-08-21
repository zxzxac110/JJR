<template>
	<div @click="aaa">
		<div class="center">
			<div class="body_name">
				<mt-button @click.native="open('picker')" >{{value}}</mt-button>
    		<mt-datetime-picker class="picker_show"
      		ref="picker"
      		type="date"
      		v-model="value"
      		:startDate = "startDate"
      		:endDate = "endDate">
    </mt-datetime-picker>
			</div>
		</div>
		
	</div>
</template>
<script>
import { formatDate } from '../../js/time.js';
export default {
	filters: {                    //时间转换
  formatDate(time) {
    var date = new Date(time);
    return formatDate(date, 'yyyy-MM-dd');
  }
},
	data() {
		return {
			date:"",
			value:new Date('2018-01-01'),            //定义显示时间
    	startDate: new Date('2018-01-01'),//设置开始时间
    	endDate: new Date('2022-12-31')   //设置结束时间
		}
	},
	methods: {
		aaa(){
			console.log(this.value)
		},
		open(picker) {
      this.$refs[picker].open();    //设置开始
    },
		openPicker() {
        this.$refs.picker.open();
      },
	},
}
</script>
<style scoped>
.inp{border:1px solid #eee;border-radius: 50px;padding-left:30px;}
.body_name{padding:5%;}
.center{width: 90%;margin: auto}
.mint-datetime-action{width:49% !important;}
</style>