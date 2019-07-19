var express=require('express')
var app=express()
var path=require('path')
// express.static() 使用静态资源
// app.use()  使用 中间件 插件  
// 路由 API
console.log(__dirname)
var publicpath=path.resolve(__dirname,"public")//路径
app.use(express.static(publicpath))
app.listen(3000)