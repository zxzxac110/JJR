const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');//post 请求需要
const cors = require("cors");//session
const session = require("express-session");
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  post: 3306,
  database: "career",
  connectionLimit: 20
})
var app = express();
app.use(cors({
  origin: ["http://127.0.0.1:8082", "http://localhost:8082"],
  credentials: true
}))
app.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true
}))
app.use(express.static("public"));
app.use(express.static("assets"));
app.listen(3000);
app.use(bodyParser.urlencoded({  ///post请求需要
  extended: false
}));
//-----------------------------------------------------注册
app.post("/reg", (req, res) => {
  var { uname, upwd, uphone } = req.body
  var sql = 'SELECT uname FROM career_user WHERE uname=?'
  pool.query(sql, [uname], function (err, result) {
    if (err) throw err;
    if (result.length > 0) { res.send({ code: -1, msg: "已存在的用户名" }); return; }
    var sql = 'INSERT INTO `career_user`( `uid`, `uname`, `password`, `nickname`, `phone`,`avatar`) VALUES (null,?,?,?,?,?)'
    pool.query(sql, [uname, upwd, uname, uphone, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEeklEQVRoQ9Vay3XbOBR9jxa5HaWCuIOxKxi5AisVRKkg8kLA8WqclQ+pheUKRu5AqSByBaPpIFPBeLa2yZdzZUCHoikRH+V4BksbAO/Fw7vvAzEdYNzc3PSfn59/I6ITEXknIn1mfhCRB2zPzH37N2b+h4hWvV7v/uLiYv3/mMGhiwH68fHxnJlPATRJkuVkMlm67DedTgdVVQ0MsT+zLPsaSsabgDntzzhpIporpVYuoHfNKYrihIhGsEyv17v1JeJFIM/zj0R0VlXV1eXl5fcY4M2119fXx0mSXBHRN631neveTgRw6k9PT1fMvHC9Jq4AmvPM9RplWTZ2sUYnAWviNE2vXDYMBV5fZ/xrxsyzriu6l4AFr5QaHwKY7x5FUcy6/GwngbcGb8l2kWglAIc6Ojoav9XJNy0FEmVZztqEo5VAnudzVyfyvRYh861PaK1HzfWvCOR5vlabLucJARKzBldaRAZaa/jFZmwRMJOGWmvo8X9utB3uFgFcnTYz+TKZTqfnIjIkomO7VkSwt3OA2vXNJsYNAQQQETlWSs19AdcUAynGmJk3wBt7Ie34FHM9i6JA2vHdBtQNAXh6jOoURfEHchpH8kul1Jnj3FfT6ljXBGyqEErAWO+bJ6DTUEuAgM0M1gTyPB9XVbUITdBwL5kZiZ7PwFUKuq4mTg2wfk3gANcHdQAKGuchIl9i1M5i/v8TMHk4tH8rQDgf5YsFQyzwQWu98PlOfS5iQpZlM4YD4h8xeX5RFABy7gOGmc9ivmlxc1NXfUDYuSZC/u6z9hAEqqrqszVFTLESokKxTmyu/mhNIEYNjIqJz+mbuSul1GnAus2SteUPZIEVM//qA0ZE/tVa933W1OfWLTBMkuQhxqFCVIiI7pVSawEJGRsnPoQKhTgxEd2Gpi4gvCFgqp1xjB+YXApS6hqN79M0HUYKx0scOEQqgT0MCfQ9O0eapu9iwNcx22QuWol81Egp1dmP6joFq57WAqOyLJeh2aj9WFEUnXIqIn9prdEPDR6vstHYesAnIsdGYHyrLv0bUx4ooKEiQ2W2b6DfdBt8/IaAFZ16SQmznoQWGT5OHGMF5G54ILHVXLOtElwXmxbgZ8eTDa6Jmzdli4ANzz4xodZCcS3oLUfUEIs0Te9cJbWt9G3rzKEtghPa+fJin5eICF28XS0UR2MQ3tLmVVXd7lPBuvLUN27V43rVX59ce15Cuz04EdvDbF6W5Zc2Irvq9lYCzfTCtNpxv9Ft+xnAtziJyCJJkvlkMvnalM0m+c73ARF5z8wA/hZjKSL3+5rNnS80IrJk5l/eAj1qBmZG/2enP3bmJEaZFr4FSyxhpBxVVQ270ptOAgBifAKW8Kq6QkkAfJZlAxd5dSJQI4GXQ98WohcPEbnzeR1yJlBL2IZ4/iSi917Iuif/jda8b7PLm0DNGogFCHpRDg5HJaIZqiuXK+Mso90H9jLDJFeQWa/OHBFB4/EWF9ShtviCLLCLnPmZALJa/Nxmq+MAOSYi/KplFdMBaX77B0kz0ahNkspqAAAAAElFTkSuQmCC'], function (err, result) {
      if (err) throw err;
      if (result.affectedRows > 0) {
        res.send({ code: 1, msg: "注册成功" })
      } else {
        res.send({ code: -1, msg: "注册失败" })
      }
    })
  })
})
//http://127.0.0.1:3000/reg
// ------------------------------------------------登录
app.get("/login", (req, res) => {
  if (req.query.uphone) {
    console.log(req.query)
    var sql = 'SELECT uid,nickname FROM career_user WHERE phone=?'
    pool.query(sql, [req.query.uphone], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        req.session.uid = result[0].uid;
        console.log(req.session);
        res.send({ code: 1, msg: "登录成功", data: result })
      } else {
        res.send({ code: -1, msg: "不存在的手机号" })
      }
    })
  } else {
    console.log(req.query)
    var { uname, upwd } = req.query
    var sql = 'SELECT uid,nickname FROM career_user WHERE uname=? AND password=?'
    pool.query(sql, [uname, upwd], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        req.session.uid = result[0].uid;
        console.log(req.session);
        res.send({ code: 1, msg: "登录成功", data: result })
      } else {
        res.send({ code: -1, msg: "账户名或密码错误" })
      }
    })
  }
});
//http://127.0.0.1:3000/login
//---------------------------------------------获取收藏
app.get("/personalcollect", (req, res) => {
  var uid = req.query.uid;
  var coid = req.query.coid;
  function cx () {                                      //查询函数
    var sql = `SELECT coid,cid,title,salary,time,cname,experience,education,pic,province,cantonal FROM career_collect WHERE uid=?`
    pool.query(sql, [uid], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send({ code: 1, msg: "查询成功", data: result })
      } else {
        res.send({ code: -1, msg: "查询失败" })
      }
    })
  }
  if (coid) {
    var sql = `DELETE  FROM career_collect  WHERE  coid=?`
    pool.query(sql, [coid], (err, result) => {        //删除指定数据
      if (err) throw err;
      if (result.affectedRows > 0) {
        cx()                                //调用查询函数
      } else {
        res.send({ code: -1, msg: "删除失败" })
      }
    })
  } else {
    cx();
  }
})
//http://127.0.0.1:3000/personalcollect?uid=1
//--------------------------------------------个人中心获取部分个人信息
app.get("/personal", (req, res) => {
  var uid = req.query.uid;
  var sql = `SELECT nickname,sex,station,avatar FROM career_user WHERE uid=?`
  pool.query(sql, [uid], (err, result) => {
    console.log(result)
    if (err) throw err;
    if (result.length > 0) {
      res.send({ code: 1, msg: "查询成功", data: result })
    } else {
      res.send({ code: -1, msg: "查询失败" })
    }
  })
})
//-------------------------------------公司详情页
app.get("/data1", (req, res) => {
  var cid = req.query.cid;
  var uid = req.query.uid;
  var obj = req.query
  console.log(req.query)
  console.log(uid)
  console.log(!req.query.title)
  if (!req.query.title) {   //说明没有点击收藏按钮.只需要查询数据显示在页面
    var sql = `SELECT cid,title,time,details,salary,cname,pic,experience,education,linkman,phone,province,cantonal FROM career_company WHERE cid=?`
    pool.query(sql, [cid], (err, result) => {    //查询页面具体数据
      if (err) throw err;
      if (result.length > 0) {
        var cxres = result
        console.log(cxres)
        var sql = `SELECT coid FROM career_collect WHERE uid=? AND cid=?`
        pool.query(sql, [uid, cid], (err, result) => {
          if (result.length > 0) {
            cxres[0].aixin = "09.png";
            res.send({ code: 1, msg: "查询成功", data: cxres });
          } else {
            cxres[0].aixin = "08.png";
            res.send({ code: 1, msg: "查询成功", data: cxres });
          }
        })
      } else {
        res.send({ code: -1, msg: "查询失败" })
      }
    })
  } else {  //需要先查询有没有收藏在决定是否收藏
    var sql = `SELECT coid FROM career_collect WHERE uid=? AND cid=?`
    pool.query(sql, [uid, cid], (err, result) => {
      if (err) throw err;
      console.log(result.length)
      if (result.length == 0) {
        var sql = `INSERT INTO career_collect SET ?`
        pool.query(sql, [obj], function (err, result) {
          if (err) throw err;
          if (result.affectedRows > 0) {
            res.send({ code: 1, msg: '收藏成功' });
          } else {
            res.send({ code: 1, msg: '收藏失败' })
          }
        })
      } else {
        res.send({ code: -1, msg: "已经收藏" })
      }
    })
  }
})
//..........................首页
app.get("/gagege", (req, res) => {
  var sql = `SELECT cid,title,time,details,salary,cname,pic,experience,education,linkman,phone,province,cantonal FROM career_company`
  pool.query(sql, (err, result) => {    //查询页面具体数据
    if (err) throw err;
    console.log(result)
    if (result.length > 0) {
      res.send({ code: 1, msg: "查询成功", data: result })
    } else {
      res.send({ code: -1, msg: "查询失败" })
    }
  })
})
//------------------分类
app.get("/fenlei", (req, res) => {
  var sql = `SELECT cid,title,time,details,salary,cname,pic,experience,education,linkman,phone,province,cantonal FROM career_company`
  pool.query(sql, (err, result) => {    //查询页面具体数据
    if (err) throw err;
    console.log(result)
    if (result.length > 0) {
      res.send({ code: 1, msg: "查询成功", data: result })
    } else {
      res.send({ code: -1, msg: "查询失败" })
    }
  })
})
//------------基本信息
app.post("/jbxx", (req, res) => {
  console.log(req.body)
  var { uid, avatar, nickname, email, QQ, height, birthdata, workdata, sex, marital, education, province, city, xprovince, xcity, introduce } = req.body
  if (avatar) {
    var jj = 'avatar=?,nickname=?,email=?,QQ=?,height=?,birthdata=?,workdata=?,sex=?,marital=?,education=?,province=?,city=?,xprovince=?,xcity=?,introduce=?'
    var sql = `UPDATE career_user SET ${jj} WHERE uid=${uid}`
    pool.query(sql, [avatar, nickname, email, QQ, height, birthdata, workdata, sex, marital, education, province, city, xprovince, xcity, introduce], (err, result) => {    //更新页面具体数据
      if (err) throw err;
      console.log(result)
      if (result.affectedRows > 0) {
        res.send({ code: 1, msg: "保存成功" })
      } else {
        res.send({ code: -1, msg: "保存成功" })
      }
    })
  } else {
    var sql = `SELECT avatar,nickname,email,QQ,height,birthdata,workdata,sex,marital,education,province,city,xprovince,xcity,introduce FROM career_user WHERE uid=?`
    pool.query(sql, [uid], (err, result) => {    //查询页面具体数据
      if (err) throw err;
      //console.log(result)
      if (result.length > 0) {
        res.send({ code: 1, msg: "查询成功", data: result })
      } else {
        res.send({ code: -1, msg: "查询失败" })
      }
    })
  }
})