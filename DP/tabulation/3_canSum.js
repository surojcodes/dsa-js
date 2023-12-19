//Method 1
const canSum = (target, numbers) => {
  const possible = new Array(target + 1).fill(false);
  possible[0] = true;
  //currIndex is the target number
  for (let currIndex = 1; currIndex <= target; currIndex++) {
    for (let num of numbers) {
      if (currIndex - num >= 0) {
        //we take the num from array and see if its possible to generate (target-num)
        if (possible[currIndex - num] === true) possible[currIndex] = true;
      }
    }
  }
  return possible[target];
};
// Method 2
const canSum2 = (target, numbers) => {
  const table = new Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= table.length; i++) {
    if (table[i]) {
      for (let num of numbers) {
        if (table[i + num] !== undefined) table[i + num] = true;
      }
    }
  }
  return table[target];
};

// console.log(canSum2(7, [2, 3])); //true
// console.log(canSum2(7, [5, 3, 4, 7])); //true
// console.log(canSum2(7, [2, 4])); //false
// console.log(canSum2(8, [2, 3, 5])); //true
// console.log(canSum2(300, [7, 14])); //false
