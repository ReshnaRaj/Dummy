

// function fib(num){
//     let n1=0,n2=1,nextterm
//     for(let i=1;i<=num;i++){
//         console.log(n1)
//         nextterm=n1+n2
//         n1=n2
//         n2=nextterm
//     }
//     return n1
// }
// console.log(fib(3))


function recurfib(num){
    if(num<2){
        return num
    }
     return recurfib(num-1)+recurfib(num-2)
}
console.log(recurfib(4))
