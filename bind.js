let multiply=function (x,y,z){
    console.log(x+y+z);
}
let multiplyTwo=multiply.bind(this,2)
multiplyTwo(5,3);
//  const person={
//     name:'reshna',
//     age:23
//  }
//  function displayDetails(feedback,g){
//     console.log(this.name,this.age,`${feedback},${g}`)
//  }
//  const person2={
//     name:'teena',
//     age:24
//  }
//  displayDetails.call(person,['teena callingg'],['yahiyaa'])
//  displayDetails.call(person2)