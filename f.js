var express=require('http')
 const server=http.createServer((req,res)=>{
     res.writeHead(200)
     res.send("hello World")
 })
 server.listen(4000,()=>{
     console.log("server is running on port 4000")
 })