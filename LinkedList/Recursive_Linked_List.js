//Recursive Methods in linked list operations
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

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    this._push(value, this.head);
  }
  //recursive push helper method
  _push(value, curr) {
    if (curr.next === null) {
      curr.next = new Node(value);
      return;
    }
    this._push(value, curr.next);
  }

  //reverse a linked list recursive
  reverse(prev = null, curr = this.head) {
    if (curr === null) {
      this.head = prev;
      return;
    }
    const next = curr.next;
    curr.next = prev;
    this.reverse(curr, next);
  }

  //print all values in the linked list
  traverse() {
    return this._traverse(this.head);
  }
  _traverse(curr) {
    if (curr === null) return '';
    return `${curr.value}=>` + this._traverse(curr.next);
  }
}

const ll = new LinkedList();
ll.push(20);
ll.push(30);
ll.push(50);
ll.push(70);
console.log(ll.traverse());
ll.reverse();
console.log(ll.traverse());
