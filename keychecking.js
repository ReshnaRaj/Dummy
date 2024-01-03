const person={
    name:'teena',
    age:23,
    address:{
        city:'mlpm',
        zipcode:34567
    }
}
console.log(Object.keys(person.address.country))//Object method
// const hasKey='city' in person.address
// if(hasKey){
//     console.log("key existed");
// }
// else{
//     console.log("key not existed");
// }