var  express=require('express');
// console.log(express)
var app=express();//基于http封装的
// 执行了一个get请求
// 在express中路径不区分大小写，并且可以链式调用
// app.get('/',(req,res)=>{
//     res.send({"success":"ok"});
// })
// app.get('/About',(req,res)=>{
//     res.send("about");
// })
// app.get('/',(req,res)=>{
//     res.send("首页");
// })
// 获取路由动态参数  冒号必须加
app.get('/about/:id',(req,res)=>{
    res.send("获取来的路由参数为"+req.params.id);
}).get('/about1/:id',(req,res)=>{
    res.send("获取来的路由参数为"+req.params.id);
})
app.listen(3000);