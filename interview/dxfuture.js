const array = [2, 35, 41, 5, 1, 0];
const sortedArray = array.sort((a, b) => a - b);

function isPrime(num) {
    // console.log(num,"each number")
    if (num <= 1) {
        return false;
    }
    console.log(num);
    for (let i = 2; i <= num/2; i++) {
        console.log(num,i,"inside");
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeNumbers = sortedArray.filter(num => isPrime(num));
console.log("Sorted Array:",sortedArray)
console.log("Prime Numbers in Sorted Array:", primeNumbers);

 