function pattern(n){
    let a = 65; // ASCII value for 'A'
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += String.fromCharCode(a);  
        }
        a++;
        console.log(line);
    }
}
pattern(5);
// A
// BB
// CCC
// DDDD
// EEEEE
function pattern(n) {
    let a = 65; // ASCII value for 'A'
    let counter = 1;
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
        if (i % 2 === 0) {
         console.log(line,"p")
          line += counter;
        } else {
          line += String.fromCharCode(a);
        }
      }
      if (i % 2 === 0) {
        counter++;
      } else {
        a++;
      }
      console.log(line);
    }
  }
  
  pattern(7); // Adjust the value to match your desired number of rows
  // Adjust the value to match your desired number of rows
// A
// 11
// BBB
// 2222
// CCCCC
// 333333
// DDDDDDD
  
