// const array = [1, 2,6, 2, 7,3, 5,3,1];
// const uniqueArray = array.filter((element) => {
//   return array.indexOf(element) === array.lastIndexOf(element);
// });

// console.log(uniqueArray);
const array = [1, 2,6,7,1];
const uniqueArray = [];
let count=0
let sum=0
for (let i = 0; i < array.length; i++) {
  let isUnique = true;
  for (let j = 0; j < array.length; j++) {
    if (i !== j && array[i] === array[j]) {
      console.log(j,"jjj")
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    // count++
    sum+=array[i]
    uniqueArray.push(array[i]);
    // console.log(uniqueArray,i)
  }
}
console.log(uniqueArray);
// [2,6,7]

// console.log(count,"count of unique elements")
// console.log(sum,"sum")
