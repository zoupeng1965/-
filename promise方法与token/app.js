
 const express=require("express");
 const app=express()
 const axios=require("axios")
 let jwt = require('jsonwebtoken')

 app.use(express.static("./public"))
 app.get("/",(req,res)=>{
     res.send("阿诗丹顿")
 })
 app.get("/text",(req,res)=>{
    res.send({msg:"沙发斯蒂芬"})
})
app.get("/jhsj",(req,res)=>{
    const keyword = encodeURI('海王')
    axios.get(`http://v.juhe.cn/movie/index?key=365edb2da30b0fdf311b239e64ee7a61&title=${keyword}`)
    .then(rest=>{
        // console.log(rest)
        console.log(rest.data,22)
        res.send({msg:rest.data})
    })
    
})

// 设置token
app.get("/aaa",(req,res)=>{
    jwt.sign({user:"张三",pwd:"123456",exp:Math.floor(Date.now() / 1000) +3},"的地方",(err,token)=>{
        if(err)return  res.send({err: 1, msg: '登录失败'})
        res.send({err: 0, msg: token})
    })
})

// 读取token
app.get("/bbb",(req,res)=>{
    console.log(req.query.token)
    var token = req.query.token

    jwt.verify(token,"的地方",(err,data)=>{
        if (err) return res.send({err: 2, msg: '获取用户信息失败'})
        res.send({err: 0, msg: data})
    })
})

 app.listen(3000,()=>{
     console.log("http://127.0.0.1:3000")
 })
