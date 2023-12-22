const countConstruct = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] !== 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i]; //focus on table[i]
        }
      }
    }
  }
  // console.log(table)
  return table[target.length];
};

console.log(countConstruct('apple', ['a', 'le', 'ap', 'appl', 'e'])); //1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
console.log(countConstruct('apple', ['a', 'e', 'ap', 'app', 'e'])); //0
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); //0

console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //0
