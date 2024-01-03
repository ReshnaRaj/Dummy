//  write a function returns the reverse the string
 
//  function reverse(string){
//     let result=''
//     for(let i=string.length-1;i>=0;i--){
//         result+=string[i]
        
//     }
//     return result
//  }
// console.log(reverse('reshna'))

 
let data="Teena reshna"
let result=data.split(' ').reverse().join('')
console.log(result)