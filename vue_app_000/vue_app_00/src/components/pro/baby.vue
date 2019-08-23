<template>
    <div class="pickerDemo">
            <div class="selectTime" @click="selectData">{{awe}}{{this.selectedValue}}</div>
        <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
        <div class="pickerPop" @touchmove.prevent>
            <mt-datetime-picker
                lockScroll="true"
                ref="datePicker"
                v-model="dateVal"
                type="date"
                year-format="{value}"
                month-format="{value}"
                date-format="{value}"
                @confirm="dateConfirm()">
            </mt-datetime-picker>
        </div>
    </div>
</template>
<script>
import {formatDateMin} from '@/assets/formatdate.js' //时间转换函数
export default {
    data () {
        return {
			awe:"请选择",		  //开始现实内容
            dateVal: new Date(), //默认是当前日期
            selectedValue: ''    //显示在页面上的日期
        }
    },
    methods: {
        selectData () { 
			this.$refs['datePicker'].open()
        },
		dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
			this.selectedValue = formatDateMin(this.dateVal);  //调用时间转换函数
			this.awe="";
			this.dateVal = this.selectedValue
        }
	},
}
</script>