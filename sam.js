const person={
    name:'akshay'
}
const person2={
    name:'simran'
}
function x(){
    console.log(this)
}
x.call(person2)