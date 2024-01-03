class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class Binarystree {
  constructor(value) {
    this.root = null;
  }
  insert(value) {
    const newnode = new Node(value);
    if (!this.root) {
      this.root = newnode;
    } else {
      this.insertnode(this.root, newnode);
    }
  }
  insertnode(root, newnode) {
    if (newnode.value < root.value) {
      if (!root.left) {
        root.left = newnode;
      } else {
        this.insertnode(root.left, newnode);
      }
    } else {
      if (!root.right) {
        root.right = newnode;
      } else {
        this.insertnode(root.right, newnode);
      }
    }
  }
  Inorder(root) {
    if (root) {
      this.Inorder(root.left);
      console.log(root.value);
      this.Inorder(root.right);
    }
  }
  valid() {
    let value = [];
    this.Inorder(this.root, value);
    for (let i = 0; i < value.length; i++) {
      if (value[i] <= value[i - 1]) {
        return false;
      }
    }
    return true;
  }
   
}
const bst = new Binarystree();
bst.insert(14);
bst.insert(5);
bst.insert(6);
bst.insert(10);
bst.insert(4);
bst.Inorder(bst.root);
console.log("bst validation");
console.log(bst.valid());
