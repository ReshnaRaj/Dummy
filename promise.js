function myPromise() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Hello, world!');
      }, 4000);
    });
  }
  
  async function myAsyncFunction() {
    const result = await myPromise();
  
    console.log(result);
    
  }
  console.log("Hai All....")
  
  myAsyncFunction();
  
