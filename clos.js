function outer(){
    let a=7
   
    function inner(){
        console.log(a);
    }
    // a=6
    return inner;
    

}
outer()();