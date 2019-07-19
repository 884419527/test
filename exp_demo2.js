var  express=require('express');
var app=express();
app.get("/",(req,res)=>{
    res.send("index")
})
// 接收get请求过来的数据通过req.query
app.get("/about",(req,res)=>{
    console.log(req.query)
    res.send("接收成功")
})
app.listen(3000)
