const str='hello world'
console.log(str.length)
let lastlength=0
for(let i=str.length-1;i>=0;i--){
    console.log(str[i])
    if(str[i]!==' '){
        lastlength++
    }
    else{
        break
    }
   

}
console.log('last length is ',lastlength)
 