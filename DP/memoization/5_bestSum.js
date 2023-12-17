/**
 * bestSum(target,numbers)
 * - return arry containing shortest combination of numbers that adds up to target
 * - can use sam number multiple times
 * - return any combo if more than one answer
 */

/**
 * Recursive Solution
 * ------------------
 * m = target
 * n = numbers.length
 * Time: O(m*n^m)
 * Space: O(m*m) -- for each of m recursive call, we have to create,in worst case, m length array (shortest)
 */
// const bestSum = (target, numbers) => {
//   if (target === 0) return [];
//   if (target < 0) return null;

//   let shortest = null;

//   for (let num of numbers) {
//     const rem = target - num;
//     const res = bestSum(rem, numbers);
//     if (res !== null) {
//       const comb = [...res, num];
//       if (shortest === null || comb.length < shortest.length) {
//         shortest = comb;
//       }
//     }
//   }

//   return shortest;
// };

// console.log(bestSum(7, [5, 3, 4, 7])); //[7]
// console.log(bestSum(8, [2, 5, 3])); //[3,5]
// console.log(bestSum(8, [1, 4, 5])); //[4,4]
// console.log(bestSum(100, [1, 2, 5, 25])); //takes tooooooooo long

/**
 * Memoized
 * Time :O(m*m*n)
 * Space:O(m*m)
 */
const bestSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = null;

  for (let num of numbers) {
    const rem = target - num;
    const res = bestSumMemo(rem, numbers, memo);
    if (res !== null) {
      const comb = [...res, num];
      if (shortest === null || comb.length < shortest.length) {
        shortest = comb;
      }
    }
  }
  memo[target] = shortest;
  return shortest;
};

console.log(bestSumMemo(7, [5, 3, 4, 7])); //[7]
console.log(bestSumMemo(8, [2, 5, 3])); //[3,5]
console.log(bestSumMemo(8, [1, 4, 5])); //[4,4]
console.log(bestSumMemo(100, [1, 2, 5, 25])); //[25,25,25,25]
