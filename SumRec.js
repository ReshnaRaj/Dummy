function sumOfNaturalNumbers(n) {
    if (n <= 0) {
      return 0; // Base case: Sum of 0 natural numbers is 0
    } else {
      return n + sumOfNaturalNumbers(n - 1); // Recursive case: Add n to sum of (n - 1) natural numbers
    }
  }
  
  const n = 10; // Change this to the desired value
  const sum = sumOfNaturalNumbers(n);
  
  console.log(`Sum of first ${n} natural numbers is ${sum}`);
  