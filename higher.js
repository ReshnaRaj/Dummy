// higher order function means  passing as argument as 
//  function that function is called callback function the outer function 
//  is called higher order function
// this is the example of caluculating the radious of the circle
// second example shows the finding the circumference of a circle
// third example shows the finding the diameter of a circle
const radius=[3,4,5,6]
// const area=function  (radius){
//     const out=[]
//     for(let i=0;i<radius.length;i++){
//         out.push(Math.PI*radius[i]*radius[i])
//     }
//     return out
// }
// const circum=function (radius){
//     const out=[]
//     for(let i=0;i<radius.length;i++){
//         out.push(2 * Math.PI*radius[i])
//     }
//     return out
// }
// const diameter=function (radius){
//     const out=[]
//     for(let i=0;i<radius.length;i++){
//         out.push(2 *radius[i])
//     }
//     return out
// }

// console.log(area(radius))
// console.log(circum(radius))
// console.log(diameter(radius))


// so for the functional programming 
// Higher-order Functions: Functions can accept other functions 
// as arguments or return functions as results, making it easier to compose and manipulate functionality.
const are1=function (radius) {
    return Math.PI*radius*radius
}
const circu=function (radius) {
    return  2 * Math.PI*radius
}
const di=function (radius) {
    return 2*radius
}
const circle=function (radius,logic){
    const out=[]
    for(let i=0;i<radius.length;i++){
        out.push( logic(radius[i]))
    }
    return out
}

console.log(circle(radius,are1))
console.log(circle(radius,circu))
console.log(circle(radius,di))