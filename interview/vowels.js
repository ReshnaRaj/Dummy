// write a function that return the number of vowels in a string
// 
function CountVowels(str){
    let count=0
    let vowels='aeiouAEIOU'
    let vowelsinclude=''

    for(let i=0;i<str.length;i++){
        if (vowels.includes(str[i])){
            vowelsinclude+=str[i]
            count++
    }
    
}
return { counts: count, vowelsincludes: vowelsinclude };
}
console.log(CountVowels('helloo'))
