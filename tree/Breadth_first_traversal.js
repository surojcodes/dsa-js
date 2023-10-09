const tree = require('./Binary_Tree');
/*
    a
   / \
  b   c
 / \   \
d   e   f

*/
const bft = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift(); //shift removes from front and returns the removes item
    console.log(current.val);
    if (current.left !== null) queue.push(current.left); //push adds to back of queue
    if (current.right !== null) queue.push(current.right);
  }
};

bft(tree);
