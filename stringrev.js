// reverse a string by using split and join
function reverseString(str){
    let array=str.split("")//converting to array
    console.log(array)
    array.reverse()//making the array reverse order
    console.log(array)
    let reverseString=array.join('')
    return reverseString   
}
// console.log(reverseString('omana kanu'))

// normal string reverse
let a='reshna kkp'
let reverse=(e)=>{
    let result='';
    console.log(typeof(result))
    for(let i=a.length-1;i>=0;i--){
        result+=e[i]
    }
    return result
}
console.log(reverse(a));

// reverse a string by calling in function
// function reverseString(str) {
//     var reversedString = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//       reversedString += str[i];
//     }
//     return reversedString;
//   }
//   console.log(reverseString("hello")); // Output: "olleh"