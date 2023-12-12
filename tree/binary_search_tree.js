class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let temp = this.root;
    while (true) {
      if (newNode.val === temp.val) return; //not having duplicates in this implementation (could maintain a count)
      if (newNode.val < temp.val) {
        //left sub tree
        if (temp.left === null) {
          temp.left = newNode;
          return;
        }
        temp = temp.left;
      } else {
        //right subtree
        if (temp.right === null) {
          temp.right = newNode;
          return;
        }
        temp = temp.right;
      }
    }
  }
  contains(val) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (val === temp.val) return true;
      if (val > temp.val) temp = temp.right;
      else temp = temp.left;
    }
    return false;
  }
  //breadth first traversal
  traverse() {
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift(); //shift removes from front and returns the removes item
      console.log(current.val);
      if (current.left !== null) queue.push(current.left); //push adds to back of queue
      if (current.right !== null) queue.push(current.right);
    }
  }
}

const bst = new BST();

/*
       45
     /   \
   22     86
  /  \   /  \
 12  25 47  90

*/
bst.insert(45);
bst.insert(22);
bst.insert(86);
bst.insert(12);
bst.insert(47);
bst.insert(90);
bst.insert(25);

// bst.traverse(); //45,22,86,12,25,47,90
console.log(bst.contains(22));
