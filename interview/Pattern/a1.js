function pattern(n){
    let a = 65; // ASCII value for 'A'
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += String.fromCharCode(a);
            a++;   
        }
        console.log(line);  
    }
}
pattern(5);
// A
// BC
// DEF
// GHIJ
// KLMNO
// function pattern(n){
//     let a = 65; // ASCII value for 'A'
//     for (let i = 1; i <= n; i++) {
//         let line = '';
//         for (let j = 1; j <= i; j++) {
//             line += String.fromCharCode(a+j-1);
             
//         }
//         console.log(line);  
//     }
// }
// pattern(5);
// A
// AB
// ABC
// ABCD
// ABCDE