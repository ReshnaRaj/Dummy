function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data=[1,2,3,4,5,6]
            resolve(data)
        })
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log("error",error)
    })
}
fetchData()