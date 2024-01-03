// const path=require('path')
// console.log(__filename)
// console.log(__dirname)
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
const httpss=require('http')
const server=httpss.createServer((req,res)=>{
    res.writeHead(200)
    res.end("hello")
})
 server.listen(4000,()=>{
    console.log("server connected")
 })