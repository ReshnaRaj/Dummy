class Stack {
  constructor() {
    this.data = [];
  }
  push(element) {
    return this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }
  display() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}
const rew = new Stack();
rew.push(3)
rew.push(5)
rew.push(2)
rew.push(77)
// rew.display();

rew.pop();
rew.display();
