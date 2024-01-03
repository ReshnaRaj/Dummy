// reverse array using normal for loop
const myArray = [1, 2, 3, 4, 5];
const reversedArray = [];
console.log(myArray.length)
for (let i = myArray.length - 1, j = 0; i >= 0; i--, j++) {
  reversedArray[j] = myArray[i];
}

console.log(reversedArray);
// reverse method
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);


