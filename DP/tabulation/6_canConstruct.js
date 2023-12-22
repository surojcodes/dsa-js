/**
 * canConstruct(target, wordBank)
 * - return a boolean indicating whether 'target' can be constructed by concatenating
 *  elements of 'wordBank' array
 * - we may reuse elements of 'wordBank' as many times as needed
 */
// ""   a   ab    abc   abcd    abcde   abcdef
const canConstruct = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(null);
  table[0] = '';
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      let int = table[i] + word;
      if (target.startsWith(int)) {
        table[int.length] = int;
      }
    }
  }
  // console.log(table)
  if (table[target.length] !== null) return true;
  return false;
};

//Method 2
const canConstruct2 = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        //if the word matches the characters starting at pos 1
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log(canConstruct2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //t
console.log(canConstruct2('', ['a', 'le', 'cat'])); //t
console.log(canConstruct2('apple', ['a', 'le', 'ap', 'appl', 'e'])); //t
console.log(canConstruct2('apple', ['a', 'e', 'ap', 'app', 'e'])); //f
console.log(
  canConstruct2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); //f
