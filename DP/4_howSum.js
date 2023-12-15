/**
 * howSum(target,numberArray)
 *
 * Return an array conraining any combo of elements that adds up to exactly the target.
 * If no combo, return null
 * If multiple combos, return any one
 *
 * e.g. howSum(7,[5,4,3,7]) =>[7] or [4,3]
 * e,g. howSum(8, [2,3,5])=>[2,2,2,2] or [5,3]
 * e.g. howSum(7,[2,4])=>null
 * e.g. howSum(0,[2,4])=>[]
 */

/**
 * Using Recursion
 * m = target
 * n = length of numbers
 * Time:O(n^m * m) -- *m because of line 26
 * Space:O(m)
 */
const howSum = (target, numbers) => {
  if (target === 0) return [];
  for (let num of numbers) {
    if (target >= num) {
      const res = howSum(target - num, numbers); //[] or null
      if (res !== null) return [...res, num]; //Cost of this is m
    }
  }
  return null;
};

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14])); // Takes loooooooooooooooooooooong

/**
 *Using Memoization
 * m = target
 * n = length of numbers
 * Time:O(n*m*m)
 * Space:O(m*m)
 */
const howSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  for (let num of numbers) {
    if (target >= num) {
      const res = howSum(target - num, numbers, memo);
      if (res !== null) {
        memo[target] = [...res, num];
        return memo[target];
      }
    }
  }
  memo[target] = null;
  return null;
};
// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14])); // null
