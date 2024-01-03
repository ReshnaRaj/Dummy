const arry = [2, 3, 3, 4, 5, 5,6,7,2];
const uniqueArra = arry.filter((elem, index) => {
  
    
  return arry.indexOf(elem) === index;

});

console.log(uniqueArra);
const uniqueCount = uniqueArra.length;
console.log(uniqueCount)
// it is the code of removing duplicate values from the array so the array look like [2,3,4,5,6,7]