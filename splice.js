const numbers = [1, 2, 3, 4, 5];

// Remove the second element from the array
numbers.splice(1, 1);

console.log(numbers); // Output: [1, 3, 4, 5]

// Insert an element at the third position in the array
numbers.splice(2, 0, 2.5);

console.log(numbers); // Output: [1, 3, 2.5, 4, 5]

// Replace the fourth element in the array with a new value
numbers.splice(3, 1, 4.5);

console.log(numbers); // Output: [1, 3, 2.5, 4.5, 5]
// In this example, we start with an array of numbers and use the splice method to modify the array in different ways.
//  The first splice call removes the second element from the array, while the second call inserts a new element at the
//   third position. Finally, the third call replaces the fourth element in the array with a new value. The resulting 
//   array is logged to the console after each splice operation.





