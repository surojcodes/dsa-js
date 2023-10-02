class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//in stack , simply push on top and pop from top (i.e. end of linked list)
class Stack {
  size = 0;
  constructor() {
    this.top = null;
  }
  //push item at top of stack
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) return;

    this.top = this.top.next;
  }
  topValue() {
    if (this.isEmpty()) return;
    return this.top.value;
  }
  traverse() {
    if (this.isEmpty()) return;
    let curr = this.top;
    while (curr !== null) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
  isEmpty() {
    if (this.top === null) {
      console.log('List is empty');
      return true;
    }
    return false;
  }
}

const stack = new Stack();
stack.traverse();
console.log('Top:', stack.topValue());
stack.pop();
stack.traverse();
