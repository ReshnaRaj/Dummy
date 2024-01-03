const person = { name: 'John', age: 30, city: 'New York', country: 'USA' };
const { name, age, ...reste } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(reste); // Output: { city: 'New York', country: 'USA' }
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2

console.log(rest); // Output: [3, 4, 5]
