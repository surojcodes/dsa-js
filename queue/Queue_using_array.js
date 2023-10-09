class Queue {
  constructor() {
    this.queue = [];
  }
  //insert item  at back
  enqueue(val) {
    this.queue.push(val);
    return this.queue.length;
  }

  //remove from front
  dequeue() {
    const removed = this.queue.shift();
    return removed;
  }

  //peek at what is ar front
  peek() {
    return this.queue[0];
  }

  //traverse the queue from front to back
  traverse() {
    let queue = '';
    for (let el of this.queue) {
      queue += el + '=>';
    }
    console.log(queue);
  }
}

const queue = new Queue();
queue.enqueue(23);
queue.enqueue(13);
queue.enqueue(22);
queue.traverse();
queue.dequeue();
queue.traverse();
console.log(queue.peek());
