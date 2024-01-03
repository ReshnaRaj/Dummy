function pattern(n) {
    for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
      console.log(line);
    }
  }
  
pattern(5);
// *
// **
// ***
// ****
// *****
  
// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//       let line = '';
//       for (let j = 1; j <= i; j++) {
//         line += j;
//       }
//       console.log(line);
//     }
//   }
  
//   pattern(5);
// 1
// 12
// 123
// 1234
// 12345

// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//       let line = '';
//       for (let j = 1; j <= i; j++) {
//         line += i;
//       }
//       console.log(line);
//     }
//   }
  
//   pattern(5);
// 1
// 22
// 333
// 4444
// 55555
  