// write a function used to check whether a string is palindrome or not
function palindrome(word){
    let string=word.split("").reverse().join('')
    console.log(string)
    if(string===word){
        return true
    }
    return false
}
console.log(palindrome('reshna'))