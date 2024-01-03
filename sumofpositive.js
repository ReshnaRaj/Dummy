// normal method
function sumofarray(){
    const arr=[2,-4,6,8,-9,22]
    let sum=0;
    for(i=0;i<arr.length;i++)
    {   if(arr[i]>0){
        sum+=arr[i]
    }
   
       
    }
    //  console.log(sum)
}
// sumofarray()

const numbers = [1, -2, 3, -4, 5, -6];
// reduce method
const sumOfPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);

console.log(sumOfPositiveNumbers); // Output: 9





