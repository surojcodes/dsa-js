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

  //Delete node with given value
  delete(target) {
    let curr = this.head;
    let prev = null;
    while (curr !== null) {
      if (curr.value === target) {
        //if the item to be removed is first item
        //we will need to move head
        if (prev === null) {
          this.head = curr.next;
          return true;
        }
        prev.next = curr.next;
        return true;
      }
      prev = curr;
      curr = curr.next;
    }
    return false;
  }

  //Reverse a Linked List
  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      let next = curr.next; //we need ref to the node ahead of current.
      curr.next = prev;

      prev = curr;
      curr = next;
    }
    this.head = prev;
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

  [Symbol.iterator]() {
    let curr = this.head;
    return {
      next() {
        if (curr === null) return { value: undefined, done: true };
        else {
          let ret = { value: curr.value, done: false };
          curr = curr.next;
          return ret;
        }
      },
    };
  }
}

const ll = new LinkedList();
ll.push(1);
ll.push(34);
ll.push(33);
ll.push(21);
ll.push(3);
for (let x of ll) {
  console.log(x);
}
