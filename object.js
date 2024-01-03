const person={
    name:'rahul',
    greet:function (){
        console.log("hello");
    }
}
person.hobbies=function (){
    console.log('name:',this.name)
}
// console.log(person.name);
// console.log(person.greet)
person.greet()
// person.hobbies();