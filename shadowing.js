var  a=100
let b=200
const c=400
{
    var a=2
    let b=8
    const c=4
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);//in here a is shadowing which is var
console.log(b);
console.log(c);