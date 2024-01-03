
// sum of array elements by using for loop
const numbers=[2,4,5,6]
function sumfind(numbers){
let sum=0
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
}
    return sum
}
// console.log(sumfind(numbers))

// finding sum of array elements by using reduce
const reduce=numbers.reduce((acc,curr)=>{
    console.log(acc,"jjj",curr,"iiii")
    acc+=curr
    return acc
})
console.log(reduce);

// sum of array elements by using forEach
const arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(element) {
  sum += element;
});

// console.log(sum);


 