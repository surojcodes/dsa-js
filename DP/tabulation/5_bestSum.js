/**
 * bestSum(target,numbers)
 * - return arry containing shortest combination of numbers that adds up to target
 * - can use same number multiple times
 * - return any combo if more than one answer
 */

const bestSum = (target, numbers) => {
  const combo = new Array(target + 1).fill(null);
  combo[0] = [];
  for (let currIndex = 0; currIndex <= target; currIndex++) {
    if (combo[currIndex] != null) {
      for (let num of numbers) {
        const currCombo = combo[num + currIndex];
        if (currCombo !== undefined) {
          const replacement = [...combo[currIndex], num];
          if (currCombo === null || replacement.length < currCombo.length) {
            combo[num + currIndex] = replacement;
          }
        }
      }
    }
  }
  return combo[target];
};

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 5, 3])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]
