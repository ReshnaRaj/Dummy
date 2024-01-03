 function hello(a){
    return new Promise((resolve,reject)=>{
        if(a>5){
            resolve({state:"true"})
        }
        else{
            reject({state:"false"})
        }
    }).then((ans)=>{
        console.log(ans.state)
    }).catch((err)=>{
        console.log(err.state)
    })
 }
 let b=67
 hello(b)

 function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data=[1,2,34,5]
            resolve(data)
        },2000)
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log("error while fetching")
    })
  }
  fetchData()

// let p1=Promise.resolve("one")
//  let p2=p1.then((r)=>r+"two")
//  p2.then((z)=>console.log(z.length))

 