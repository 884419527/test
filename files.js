// fs 文件系统 操作文件
var http = require('http');
// fs=file system 文件系统
var fs = require('fs')
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    // readFile 读文件
    // fs.readFile("./1.txt",(err,data)=>{
    //     res.end(data);
    // })
// 写入内容
    // fs.writeFile("./1.txt","写入内容",{flag:"a"},(err)=>{
    //     if(err){
    //         throw error
    //     }
    //     res.end("success")
    // })
// 写入到另一个文件内
    // fs.readFile("1.txt", (err, data) => {
    //     fs.writeFile("2.txt", data, (err) => {
    //         if(err){
    //             throw error
    //         }
    //     })
    // })
// 复制文件
    // fs.copyFile("1.txt","3.txt",(err)=>{
    //     res.end()
    // })
// 重命名文件
    // fs.rename("1.txt","11.txt",(err)=>{
    //     res.end()
    // })

//    删除文件
    // fs.unlink("3.txt",(err)=>{
    //     res.end();
    // })


    // 创建目录
    // fs.mkdir("xx",(err)=>{
    //     res.end()
    // })

    // 删除目录
    // fs.rmdir("xx",(err)=>{
    //     res.end()
    // })

    // // 读取目录
    // fs.readdir("./node_modules",(err,data)=>{
    //     res.end(data)
    // })

    // 查看目录信息stat
    // fs.stat("./aa",(err,stats)=>{
    //     console.log(stats.isFile());//false
    //     console.log(stats.isDirectory())//true
    //     res.end();
    // })
 
    // 流 stream 文件流  createReadStream 创建一个读取文件流
    // 块 
     var stream=fs.createReadStream('./2.txt');
    //  content接收文件里面的内容
     var  content="";
    //  data 数据读取过程 end 数据读取完毕
    stream.on('data',(chunk)=>{
        // console.log(chunk);
        content+=chunk
        // console.log(content)
    })
    stream.on("end",(chunk)=>{
        console.log("数据读取完毕"+content)
        
    })
    res.end();
}).listen(3000)