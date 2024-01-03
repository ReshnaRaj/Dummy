function x(){
    var a=7
    function y(){
        console.log(a);
    }
    a=8
   return y;
}
var m=x()
//so m stores the reference of function x
console.log(m);



// or x()()
