let array = [1, 3, 5, 7, 9, 11, 13, 15];
let rotationCount = 4;

// Calculate the index where rotation occurs
let rotationIndex = rotationCount % array.length;

// Rotate the array
let rotatedArray = array.slice(rotationIndex).concat(array.slice(0, rotationIndex));

console.log("Array after Rotation by 4 elements is:", rotatedArray);
