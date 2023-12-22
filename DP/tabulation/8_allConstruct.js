function allConstructMemo(target, wordBank) {
  const table = new Array(target.length + 1).fill().map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    if (table[i].length !== 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          //table[i] is the current array
          //we add the current word to each of the array inside table[i]
          //and push it to already existing array in table[i+word.length]
          const newCombo = table[i].map((subArray) => [...subArray, word]);
          table[i + word.length].push(...newCombo);
        }
      }
    }
  }
  return table[target.length];
}
console.log(allConstructMemo('skateboard', ['skate', 'ska', 'ard', 'boa'])); //[];
console.log(allConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[ [ 'le', 'purp' ], [ 'le', 'p', 'ur', 'p' ] ]
console.log(
  allConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
); //4
/*
[
  ['ef', 'cd', 'ab'],
  ['def', 'c', 'ab'],
  ['def', 'abc'],
  ['ef', 'abcd'],
];
*/
