function arraysHaveSameElements(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((element) => arr2.includes(element));
}

const array1 = [1, 2, 3, 4];
const array2 = [4, 3, 2, 1];

console.log(arraysHaveSameElements(array1, array2)); // Output: true


