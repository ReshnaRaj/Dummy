let name1={
    firstname:'reshna',
    lastname:'kp', 
}

let printFullName=function (){
    console.log(`Hello, ${this.firstname} ${this.lastname}!`)
}

let name2={
    firstname:'Teena',
    lastname:'kurian',   
}

let name3={
    firstname:'Teen',
    lastname:'kuri',    
}

printFullName.call(name1)
printFullName.call(name2)
printFullName.call(name3)