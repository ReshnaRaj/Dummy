// const array=[4,5,6,7]
// const search=5
// const found=array.indexOf(search)
// console.log(found)
// if(found==-1){
//     console.log(" not founded")
// }
// else{
//     console.log(" founded")
// }
function linearsearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
        return false
    
}
console.log(linearsearch([4,5,6,7],6))




