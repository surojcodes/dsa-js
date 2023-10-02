class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  //add from back
  enqueue(val) {
    const newNode = new Node(val);
    if (this.front === null && this.back === null) {
      this.front = newNode;
      this.back = newNode;
      return;
    }
    this.back.next = newNode;
    this.back = newNode;
  }
  //remove from front
  dequeue() {
    if (this.isEmpty()) return;
    this.front = this.front.next;
  }

  //print the queue
  traverse() {
    if (this.isEmpty()) return;
    let curr = this.front;
    let queue = '';
    while (curr != this.back) {
      queue += curr.val + '=>';
      curr = curr.next;
    }
    queue += curr.val + '=>';
    return queue;
  }

  isEmpty() {
    if (this.front === null) {
      console.log('Queue is Empty');
      return true;
    }
  }
}

const queue = new Queue();
queue.enqueue(200);
queue.enqueue(30);
queue.enqueue(29);
console.log(queue.traverse());
queue.dequeue();
console.log(queue.traverse());
