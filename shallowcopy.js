const original = { name: 'John', age: 30 ,address:{city:'calicut',zip:45678}};
const copy = Object.assign({}, original);
// console.log(copy);
copy.name="shinil Das"//this will not work
// console.log(original,"1");
copy.address.city='kasargodu'//this will affect
// console.log(original,"2");
copy.address.zip=654321//this too
// console.log(original,"3");
// console.log(copy);

// console.log(original);
 
//

// Original object with a nested object
const originalArray = {
    name: "John",
    address: {
      city: "New York",
      state: "NY",
    },
  };
  
  // Creating a shallow copy using the spread operator
  const shallowCopy = { ...originalArray };
  console.log(shallowCopy,"shalloww")
  // Modifying the shallow copy
  shallowCopy.name = "Jane";
  shallowCopy.address.city = "Los Angeles";
  
  console.log(originalArray);      // { name: "John", address: { city: "Los Angeles", state: "NY" } }
  console.log(shallowCopy);   // { name: "Jane", address: { city: "Los Angeles", state: "NY" } }
  