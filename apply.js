function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
  }
  
  const person = {
    firstName: 'John',
    lastName: 'Doe',
  };
    
  const person2 = {
    firstName: 'John',
    lastName: 'Doe',
  };

  
  greet.apply(person, ['Hello']); // Output: Hello, John Doe!
  greet.apply(person2,['Hey'])

// const calculator = {
//     calculateSum: function() {
//       let sum = 0;
//       for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//       }
//       return sum;
//     },
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   // Using apply to pass the array of numbers as arguments to the method
//   const result = calculator.calculateSum.apply(null, numbers);
  
//   console.log(`The sum of the numbers is: ${result}`);
  
  