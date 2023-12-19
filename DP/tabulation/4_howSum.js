/*
return any one combo to form target by adding elements of numbers
array. Can use same element  multiple times
If sum not possible, return null
*/
const howSum = (target, numbers) => {
  const combos = new Array(target + 1).fill(null);
  combos[0] = [];
  for (let i = 0; i <= combos.length; i++) {
    if (combos[i] !== null)
      for (let num of numbers) {
        if (combos[i + num] !== undefined)
          combos[i + num] = [...combos[i], num];
      }
  }
  return combos[target];
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
