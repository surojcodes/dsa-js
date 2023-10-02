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
console.log(ll.traverse());
