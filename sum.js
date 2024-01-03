const arr=[1,2,3,4]
let sum=0
arr.forEach((value)=>{
    sum+=value;
})
console.log(sum);

// async function myfunction(){
//     try{
//         const result=await mypromise()
//         console.log(result);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
const m=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
    },1000)
})
 