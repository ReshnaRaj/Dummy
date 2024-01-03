// function CheckPrime(num) {
//     if (num == 1) {
//         return "1 is not a prime number";
//     } else {
//         for (let i = 2; i <= num / 2; i++) {
//             if (num % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(CheckPrime(1)); // This will log "1 is not a prime number" without showing undefined

// write a function to return the prime numbers from the array
function checkPrimeNumber(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        console.log(Math.sqrt(array[i]),"vishnu")
        if (array[i] <= 1) {
          
            continue; // Skip numbers less than or equal to 1 as they are not prime
        }
        let isPrime = true;
        for (let j = 2; j <= array[i] / 2; j++) {
            if (array[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            output.push(array[i]); // Add the prime number to the output array
        }
    }
    return output;
}

console.log(checkPrimeNumber([4, 5, 2, 88, 90, 3, 7])); // Output: [5, 2, 3, 7]

