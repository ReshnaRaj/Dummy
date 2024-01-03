const person = {
    id: 1,
    name: 'John',
    age: 23
}


const hasKey = 'address' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}