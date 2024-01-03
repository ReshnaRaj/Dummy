// function differnce(array1, array2) {
//   let differncearray = [];

//   for (let i = 0; i < array1.length; i++) {
//     differncearray.push(Math.abs(array1[i] - array2[i]));
//   }
//   return differncearray;
// }

// console.log(differnce([4, 5, 8], [10, 9, 1]));


function difference(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    console.log(maxLength,"kkk")
    const differenceArray = [];
  
    for (let i = 0; i < maxLength; i++) {
      const val1 = i < array1.length ? array1[i] : 0;
      console.log(val1,"jjj")
      const val2 = i < array2.length ? array2[i] : 0;
      console.log(val2,"ppp")
      differenceArray.push(Math.abs(val1 - val2));
    }
  
    return differenceArray;
  }
  
//   console.log(difference([4, 5, 8], [10, 9, 1]));  
  console.log(difference([4, 5, 8, 2], [10, 9, 1]));  
//   console.log(difference([4, 5], [10, 9, 1, 3])); 
