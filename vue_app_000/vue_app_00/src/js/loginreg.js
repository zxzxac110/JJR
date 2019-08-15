Yzm(){                                      //发送验证码函数
    if(this.yzmkg){
        this.yzmkg=false;
        var i=60;
        this.smsColor="smsColor";
        this.yzmspan=`发送短信中(${--i})` 
        var time=setInterval(()=>{
          this.yzmspan=`发送短信中(${--i})` 
          if(i==0){
            this.yzmspan=`请输入验证码`;
            this.yzmkg=true;
            this.smsColor=""
            clearInterval(time)
        }     
        },1000);
    }
}