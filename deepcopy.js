const original = { name: 'John', age: 30 ,address:{city:'mlm',zip:54321}};
const copy = JSON.parse(JSON.stringify(original));
console.log(copy,"ppp")
// original.name='rahul'//this willl not work
copy.address.city='kzkd'//this willl not work
copy.address.zip=12345//this willl not work
copy.name="maya"
// console.log(copy);

// console.log(original);
const origina={name:'yhhh',age:78}
const cop=JSON.parse(JSON.stringify(origina))
console.log(cop)
console.log(origina,"original")