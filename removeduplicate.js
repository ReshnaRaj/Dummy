// remove duplicate elements by using set
const arr = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// remove duplicate elements by using filter
const arry = [2, 3, 3, 4, 5, 5,6,7];
const uniqueArra = arry.filter((elem, index) => {
    
  return arry.indexOf(elem) === index;
//   index means the index value of array elements like 0,1,2,3 and indexOf(elem) means current value index
});
// console.log(uniqueArra);


// remove duplicate elements by using reducer
// const array = [1, 2, 2, 3, 3, 4, 5, 5];
// const uniqueArray = array.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueArray);


// normal method of removing duplicates from the array
// ------------------------------
const array = [1, 2, 6, 2, 7, 6, 3, 5, 3, 6, 1, 6];
const uniqueArray = [];
let count = 0;

for (let i = 0; i < array.length; i++) {
  let isUnique = true;
  
  // Check if the current element is already in the uniqueArray
  for (let j = 0; j < uniqueArray.length; j++) {
    if (array[i] === uniqueArray[j]) {
      isUnique = false;
      break;
    }
  }
  
  if (isUnique) {
    count++;
    uniqueArray.push(array[i]);
  }
}

console.log(uniqueArray);
console.log(count, "count of unique elements");
