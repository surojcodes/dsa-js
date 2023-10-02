/*
Problem: Given two LL, interweive them
 e.g
  list1: a => b => c => d => e => f =>
  lsit2: x => y => z =>

  Output: a => x => b => y => c => z => d => e => f =>

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
//a => b => c => d => e => f =>
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const x = new Node('x');
const y = new Node('y');
const z = new Node('z');
//x => y => z =>
x.next = y;
y.next = z;

const zipperLists = (head1, head2) => {
  let tail = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let count = 1;

  while (curr1 !== null && curr2 !== null) {
    if (count % 2 !== 0) {
      //take from list 2
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      //take from list 1
      tail.next = curr1;
      curr1 = curr1.next;
    }
    count++;
    tail = tail.next;
  }
  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;
  return head1;
};

function print(head) {
  let list = '';
  let curr = head;
  while (curr !== null) {
    list += curr.val + ' => ';
    curr = curr.next;
  }
  console.log(list);
}
print(a);
print(x);
const zipped = zipperLists(a, x);
print(zipped);
//a => x => b => y => c => z => d => e => f =>
