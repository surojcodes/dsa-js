class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  //Add Node at the end
  push(val) {
    const newNode = new Node(val);
    //when list is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  //Print Every Node value  in Linked List
  traverse() {
    let curr = this.head;
    if (this.head === null) {
      console.log('Linked List is empty.');
      return;
    }
    while (curr !== null) {
      console.log(`${curr.value}=>`);
      curr = curr.next;
    }
  }
}

const ll = new LinkedList();
