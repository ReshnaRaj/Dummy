// write a function used to remove the duplicates from the array
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
        // console.log(uniqueArray,"ui")
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
            console.log(uniqueArray,"ppp")
        }
    }

    return uniqueArray;
}
console.log(removeDuplicates([1,2,2, 3, 4, 5, 6, 7, 8,7,2,6,6,6,6]))