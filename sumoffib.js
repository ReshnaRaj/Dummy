let n1=0
let n2=1
let nextterm
let sum=0
function fib (n){

for(let i=1;i<=n;i++){
//    console.log(n1) 
   sum+=n1
   nextterm=n1+n2
    n1=n2
    n2=nextterm
    
    
}
return sum

}
console.log(fib(5))
