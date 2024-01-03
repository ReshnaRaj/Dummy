// node initialisation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// linkedlist creation
class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  postend(value){
    const node = new Node(value);
    let prev=this.head
    while(prev.next){
     prev=prev.next
    }
    prev.next=node
  }
  insertadd(value,index){
    if(index<0){
        return
    }
    if(index==0){
        const node=new Node(value)
        node.next=this.head
        this.head=node
    }
    else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            console.log(index,"indexing...")
            prev=prev.next

        }
        node.next=prev.next
        prev.next=node
    }
  }
  

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.prepend(4);
ll.prepend(6);
ll.prepend(65);
// ll.print();
// console.log("adding at end position")
// ll.postend(45)
// ll.postend(12)
// ll.print()
// console.log("specific node adding..")
ll.insertadd(100,0)
// ll.insertadd(102,2)
ll.print()