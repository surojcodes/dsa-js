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
  //Remove Last Element and return it
  pop() {
    let curr = this.head;
    let prev;
    while (curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    return curr.value;
  }
  //Print Every Node value  in Linked List
  traverse() {
    let curr = this.head;
    if (this.head === null) {
      console.log('Linked List is empty.');
      return;
    }
    let list = '';
    while (curr !== null) {
      list += `${curr.value}=>`;
      curr = curr.next;
    }
    return list;
  }
}

const ll = new LinkedList();
ll.push(21);
ll.push(22);
ll.push(23);
console.log(ll.traverse());
console.log('Popped:', ll.pop());
console.log(ll.traverse());
