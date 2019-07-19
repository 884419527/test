// 引入服务器模块
var http = require('http')
// ejs 模板引擎
var ejs = require('ejs')
// 属于node的模块不需要通过npm下载 反之就得下载
// fs=file system 文件系统
var fs=require('fs')
http.createServer((req, res) => {
    var list=[1,2,3,4,5,6]
    fs.readFile("./index.ejs",(err,data)=>{
        var str=data.toString();
        // render 渲染页面
        var result=ejs.render(str,{lists:list});
        res.end(result)//里面只能传字符串
    })
    
}).listen(3000)//,监听端口