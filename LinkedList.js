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
  //Contains a value
  contains(target) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
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
ll.push(1);
ll.push(2);
ll.push(24);
console.log(ll.traverse());
console.log(ll.contains(1));
