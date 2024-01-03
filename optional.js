let person={
    name:'shibil',
    age:56,
    address:{
        street:'123',
        city:'kakkanchery'
    }
}
let c=person?.address?.city;
let m=person?.address;
console.log(m)
console.log(c);

// ?. putting this will get undefined  if we access unknown object
// only putting . this will get error if we access unknown object 