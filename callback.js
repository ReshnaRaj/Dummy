function doSomeWork(callbac) {
    setTimeout(() => {
      console.log('Work is done!');
      callbac();
    }, 5000);
  }
  // console.log("hi alll")
  function callbackFunction() {
    console.log('Callback function was called!');
  }
  
  
  // doSomeWork(callbackFunction);



function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('John', sayGoodbye);

  