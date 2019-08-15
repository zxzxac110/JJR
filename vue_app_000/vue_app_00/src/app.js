const express=require("express");
const mysql=require("mysql");
const bodyParser=require('body-parser');
const cors=require("cors");//session
const session=require("express-session");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    post:3306,
    database:"career",
    connectionLimit:20
})
var app=express();
app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}))
app.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
}))
app.use(express.static("public"));
app.listen(3000);
//-----------------------------------------------------注册
app.post("/reg",(req,res)=>{
    console.log(req)
   var {uname,upwd,uphone}=req.query
   var sql='SELECT uname FROM career_user WHERE uname=?'
   pool.query(sql,[uname],function(err,result){
    if(err) throw err;
    if(result.length>0){res.send({code:-1,msg:"已存在的用户名"});return;}
   var sql=`INSERT INTO career_user VALUES(null,?,?,?,1,"",?,"","","","")`
   pool.query(sql,[uname,upwd,uname,uphone],function(err,result){
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
        }else{
            res.send({code:-1,msg:"注册失败"})
        }
      })  
   })
})
//http://127.0.0.1:3000/reg
// ------------------------------------------------登录
 app.get("/login",(req,res)=>{
     if(req.query.uphone){
         console.log(req.query)
        var sql='SELECT uid,uname FROM career_user WHERE phone=?'
        pool.query(sql,[req.query.uphone],function(err,result){
             if(err) throw err;
         if(result.length>0){
           req.session.uid = result[0].uid;
           console.log(req.session);
           res.send({code:1,msg:"登录成功",data:result})
            }else{
             res.send({code:-1,msg:"不存在的手机号"}) 
            } 
         })
     }else{
       console.log(req.query)
        var {uname,upwd}=req.query
        var sql='SELECT uid,uname FROM career_user WHERE uname=? AND password=?'
        pool.query(sql,[uname,upwd],function(err,result){
             if(err) throw err;
         if(result.length>0){
            req.session.uid = result[0].uid;
            console.log(req.session);
            res.send({code:1,msg:"登录成功",data:result})
            }else{
             res.send({code:-1,msg:"账户名或密码错误"}) 
             } 
        })
     }
  });
//http://127.0.0.1:3000/login