function target(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;  
}

const ar = [10, 20, 30, 4];
const targe = 14;
console.log(target(ar, targe));
