const tree = require('./Binary_Tree');
/*
    a
   / \
  b   c
 / \   \
d   e   f

*/
const dftRecursive = (root) => {
  if (root === null) return;
  console.log(root.val);
  dftRecursive(root.left);
  dftRecursive(root.right);
};

dftRecursive(tree);
