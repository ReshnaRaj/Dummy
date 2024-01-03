// after currying
// --------------------------------
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6
// before currying
// -------------------------------------
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1,2,3)); // 6