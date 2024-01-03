// finding common factors in two array
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const duplicates = array1.filter(value => array2.includes(value));

// console.log(duplicates); 

const myArray = [1, 2, 2, 3, 3, 4];
const duplicate = [];

for (let i = 0; i < myArray.length; i++) {
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[i] === myArray[j] && !duplicate.includes(myArray[i])) {
      duplicate.push(myArray[i]);
    }
  }
}

console.log(duplicate); // Output: [2, 3]
const myArr = [1, 2, 2, 3, 3, 4];
const duplicat = [];

for (let i = 0; i < myArr.length; i++) {
  let count = 0;
  for (let j = i + 1; j < myArr.length; j++) {
    if (myArr[i] === myArr[j]) {
      count++;
    }
  }
  let isDuplicate = false;
  for (let k = 0; k < duplicat.length; k++) {
    if (myArr[i] === duplicat[k]) {
      isDuplicate = true;
      break;
    }
  }
  if (count > 0 && !isDuplicate) {
    duplicat[duplicat.length] = myArr[i];
  }
}

// console.log(duplicat); // Output: [2, 3]


const arr = [1, 2, 3, 4, 2, 5, 4, 6];

const duplicatt = arr.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});

// console.log(duplicatt,"ooo");