function RemovewhiteSpace(word){
    const result=word.replace(/\s/g, "")
    return result
}
console.log(RemovewhiteSpace('Interview, Success'))