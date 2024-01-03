const array = [1, 1, 2, 1, 3];

const elementCount = {};

for (let i = 0; i < array.length; i++) {
  
  if (elementCount[array[i]]) {
    elementCount[array[i]]++;
  } else {
    elementCount[array[i]] = 1;
  }
}

// console.log(array);
console.log(elementCount[array]);
