//this kinda stupid but still...

class Stack {
  constructor() {
    this.stack = [];
  }
  //add to stack
  push(val) {
    this.stack.push(val);
    return this.stack.length;
  }
  //remove from stack
  pop() {
    const popped = this.stack.pop();
    return popped;
  }

  //peek at top of the stack value
  top() {
    return this.stack[this.stack.length - 1];
  }
  //traverse the stack (give it LIFO appearance)
  traverse() {
    for (let i = this.stack.length - 1; i >= 0; --i) {
      console.log(this.stack[i]);
    }
  }
}

let stack = new Stack();
stack.push(11);
stack.push(12);
stack.push(13);
stack.traverse();
stack.pop();
stack.traverse();
console.log(stack.top());
