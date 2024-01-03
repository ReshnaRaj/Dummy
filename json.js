// Define a JavaScript object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "swimming", "cooking"],
  };
  
 
  const jsonPerson = JSON.stringify(person1);
  
  console.log(jsonPerson,"ppp");

// A JSON-formatted string
const jsonString = '{"firstName":"John","lastName":"Doe","age":30,"isStudent":false,"hobbies":["reading","swimming","cooking"]}';

// Convert the JSON string to a JavaScript object
const person = JSON.parse(jsonString);

// Access properties of the JavaScript object
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Is Student?", person.isStudent);
console.log("Hobbies:", person.hobbies);

  