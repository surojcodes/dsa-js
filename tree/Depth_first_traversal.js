const tree = require('./Binary_Tree');
/*
    a
   / \
  b   c
 / \   \
d   e   f

*/
const dft = (root) => {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.val);
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
};

dft(tree);
