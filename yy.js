class Stack{
    constructor(){
        this.data=[]
    }
    push(value){
        return this.data.push(value)
    }
    peek(){
        console.log("top value",this.data[this.data.length-1])
    }
    print(){
        for(let i=0;i<this.data.length;i++){
            console.log(this.data[i])
        }
    }
    pop(){
         console.log("popped",this.data.pop())
    }
}
const neo=new Stack
neo.push(4)
neo.push(45)
neo.print()
neo.peek()
neo.pop()
neo.print()
