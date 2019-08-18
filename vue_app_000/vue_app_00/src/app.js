const express=require("express");
const mysql=require("mysql");
const bodyParser=require('body-parser');//post 请求需要
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
app.use(bodyParser.urlencoded({  ///post请求需要
    extended:false
  }) );
//-----------------------------------------------------注册
app.post("/reg",(req,res)=>{
   var {uname,upwd,uphone}=req.body
   var sql='SELECT uname FROM career_user WHERE uname=?'
   pool.query(sql,[uname],function(err,result){
    if(err) throw err;
    if(result.length>0){res.send({code:-1,msg:"已存在的用户名"});return;}
   var sql='INSERT INTO `career_user`( `uid`, `uname`, `password`, `nickname`, `phone`) VALUES (null,?,?,?,?)'
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
        var sql='SELECT uid,nickname FROM career_user WHERE phone=?'
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
        var sql='SELECT uid,nickname FROM career_user WHERE uname=? AND password=?'
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
//---------------------------------------------获取收藏
app.get("/personalcollect",(req,res)=>{
    var uid=req.query.uid;
    var sql=`SELECT cid,title,salary,time,cname,experience,education,pic,province,cantonal FROM career_collect WHERE uid=?`
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:-1,msg:"查询失败"})
        }
    })
})
//--------------------------------------------个人中心获取部分个人信息
app.get("/personal",(req,res)=>{
    var uid=req.query.uid;
    console.log(uid)
    var sql=`SELECT nickname,sex,station FROM career_user WHERE uid=?`
    pool.query(sql,[uid],(err,result)=>{
        console.log(result)
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:-1,msg:"查询失败"})
        }
    })
})