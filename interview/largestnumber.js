// write a function that return the largest element from the array
// function largestElement(arr){
//     let max=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(largestElement([34,2,1,100]))
function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(bubblesort([1,3,2,90,80,1,0,0]))