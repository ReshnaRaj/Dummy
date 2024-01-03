const promise1 = Promise.resolve('Hello');
const promise2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('World');
  }, 2000);
});
Promise.all([promise1,promise2])
  .then((results) => {
    console.log(results); // Output: ['Hello', 'World']
  })
  .catch((error) => {
    console.error(error);
  });
