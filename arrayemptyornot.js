// normal method used to check the array is empty or not
const arr = [];

if (arr.length === 0) {
  console.log('Array is empty');
} else {
  console.log('Array is not empty');
}

const array = [1,2];

if (Array.isArray(array) && array.length === 0) {
  console.log('Array is empty');
} else {
  console.log('Array is not empty');
}

