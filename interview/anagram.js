// write a function that checks whether two strings are anagram or not
function checkAnagram(str1,str2){
    let word1=str1.split("").sort().join('')
    console.log(word1)
    let word2=str2.split("").sort().join('')
    console.log(word2)
    if(word1===word2){
        return true
    }
    return false


}
console.log(checkAnagram("listen",'silent'))