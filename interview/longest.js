// write a function returns the longest word in the sentence
function longestword(str){
    let word=str.split(" ")
    console.log(word)
     
    let longestwor=''
    for(let words of word){
        if(words.length>longestwor.length){
            
            longestwor=words
        }
    }
    return longestwor;
}
console.log(longestword("This is javascript"))