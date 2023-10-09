const tree = require('./Binary_Tree');
/*
    a
   / \
  b   c
 / \   \
d   e   f

*/

//pre-order traversal -> parent before children (self,left,right) (abdecf)
const DFPrintPreOrder = (root) => {
  if (root === null) return; //tree is empty
  console.log(root.val);
  DFPrintPreOrder(root.left);
  DFPrintPreOrder(root.right);
};
//post-order -> left, right, self (debfca)
const DFPrintPostOrder = (root) => {
  if (root === null) return; //tree is empty
  DFPrintPostOrder(root.left);
  DFPrintPostOrder(root.right);
  console.log(root.val);
};

//in-order (left,self,right) (dbeacf)
const DFPrintInOrder = (root) => {
  if (root === null) return; //tree is empty
  DFPrintInOrder(root.left);
  console.log(root.val);
  DFPrintInOrder(root.right);
};

DFPrintPreOrder(tree);
console.log('--------');
DFPrintPostOrder(tree);
console.log('--------');
DFPrintInOrder(tree);
