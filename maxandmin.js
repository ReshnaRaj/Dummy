 
 function maxarray(array){
    let max=array[0]
    let min=array[0]
    for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i]
         
    }
     if (array[i] < min) {
           min = array[i];
       }
    }
    return {max,min}
}
console.log(maxarray([34,5,6,2]))