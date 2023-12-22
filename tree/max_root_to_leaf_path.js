class Node {
  constructor(val) {
    this.left = null;
    this.val = val;
    this.right = null;
  }
}

const a = new Node(5),
  b = new Node(11),
  c = new Node(3),
  d = new Node(4),
  e = new Node(2),
  f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
    5
   / \
 11   3
 / \   \
4   2   1

*/

//O(n) both time and space
const maxPathSum = (root) => {
  if (root.left === null && root.right === null) return root.val;
  if (root === null) return -Infinity;
  const maxChildPathSum = Math.max(
    maxPathSum(root.left),
    maxPathSum(root.left)
  );
  return maxChildPathSum + root.val;
};

console.log(maxPathSum(a));
