// console.log(this)
// this.name="reshna"
// console.log(this.name)

// function checkThis(){
//     console.log(this)
// }
// checkThis()
console.log("new function starts...")
const person={
    checkThiss:function(){
        console.log(this)
    }
}
person.checkThiss()
//  console.log(person)
 // both this will give 
// { checkThiss: [Function: checkThiss] }
// { checkThiss: [Function: checkThiss] }

 const fun=person.checkThiss
//  fun()
//  but this function return the window 