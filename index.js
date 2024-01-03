
// function a(){
// c()
// function c(){
//     console.log(v);
// }
// }

// const v=10
// a()
// function a(){
//     console.log(b);
// }
// var b=1
// a()
// function a(){
    
//     c()
//     function c(){
//         console.log(b);
//     }
// }
// var b=45
// a()
// console.log(a);
// let a=10
// var b=4
const array=[2,3,4,5,9]
const reduce=array.reduce((acc,curr)=>{
    console.log(acc,"acc",curr)
    if(acc>curr)
    {
        return acc
    }
    
    else{
        return curr
    }
})
console.log(reduce);
// this code specify that getting highest element in the array





