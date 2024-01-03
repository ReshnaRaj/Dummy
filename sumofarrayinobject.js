const data = {
    "a": [1, 2, 3],
    "b": [4, 5, 6],
    "c": [2, 3]
  };
   console.log(Object.values(data))
  // Calculate the sum of all elements in arrays within the data object
  const sum = Object.values(data).reduce((total, arr) => {
    return total + arr.reduce((arrTotal, num) => arrTotal + num, 0);
  }, 0);
  
  console.log(sum); // Output: 26 (1 + 2 + 3 + 4 + 5 + 6 + 2 + 3)
  