// /normal function
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(1,2,3))

// currying function
// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(2)(2)(3)) 


function calculator(operation)
{
    return (a)=>{
        return (b)=>{
            if(operation==="sum") return a+b;
            else if(operation==="multiply") return a*b;
            else if(operation==="divide") return a/b;
            else if(operation==="sub") return a-b;
            else return "invalid operation"
        }
        
    }
}
// console.log(calculator("sum")(2)(3))
// console.log(calculator("multiply")(3)(4))


function add(a){
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return (e)=>{
                    return a+b+c+d+e
                }
            }
        }
    }
}
console.log(add(1)(2)(3)(4)(5))
 


// infinite currying i didnt get it
function add1(a){
    return (b)=>{
        if (b) return add(a+b)
        return a;

    }
}
console.log(add1(3)(4)(5)())