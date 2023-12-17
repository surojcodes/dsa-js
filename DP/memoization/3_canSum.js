//Can you generate target by adding elements of array.
//Can use each number in the array multiple times.
//assume all input numbers are positive

//Recursive Solution
//Time : O(n^m) (m target sum, n is array length) (branching factor of tree)
//Space: O(m) (height of tree)
const canSum = (target, arr) => {
  if (target === 0) return true;
  for (let num of arr) {
    //this decrease the branching factor a little but not so significant to change big(O)
    if (target >= num) {
      if (canSum(target - num, arr) === true) return true;
    }
  }
  return false;
};

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));// takes loooooooooooooong time

//With Memoization
//(m target sum, n is array length)
//Time: O(m*n)
//Space:O(m)
const canSumMemo = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  for (let num of arr) {
    if (target >= num) {
      if (canSumMemo(target - num, arr, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canSumMemo(7, [2, 3])); //true
console.log(canSumMemo(7, [5, 3, 4, 7])); //true
console.log(canSumMemo(7, [2, 4])); //false
console.log(canSumMemo(8, [2, 3, 5])); //true
console.log(canSumMemo(300, [7, 14])); //false
