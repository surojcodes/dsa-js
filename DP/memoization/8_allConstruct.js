/**
 * canConstruct(target, wordBank)
 * - in a 2D array, return all of the ways 'target' can be constructed by concatenating
 *  elements of 'wordBank' array
 * - we may reuse elements of 'wordBank' as many times as needed
 */

/**
 *
 * Using Recursion (Brute Force)
 * ------------------------------
 * m - target.length
 * n - wordBank.length
 *
 * Time: O(n^m), ignoring small operations like replace
 * Space: O(m) , ignoring small spaces
 */
/*
function allConstruct(target, wordBank) {
  if (target === '') return [[]];
  const result = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.replace(word, '');
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [...way, word]);
      result.push(...targetWays);
    }
  }

  return result;
}
console.log(allConstruct('skateboard', ['skate', 'ska', 'ard', 'boa'])); //[];
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //[ [ 'le', 'purp' ], [ 'le', 'p', 'ur', 'p' ] ]
console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
); 
console.log(
  allConstruct('aaaaaaaaaaaaaaaaaaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
  ])
); //takes tooooooooooooo long
*/
/**
 * Using Memoization
 * m - length of target
 * n - wordBank Length
 * Time : O(n*m*m)
 * Space: O(m*m)
 */

function allConstructMemo(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return [[]];
  const result = [];

  for (let word of wordBank) {
    if (target.startsWith(word)) {
      const suffix = target.replace(word, '');
      const suffixWays = allConstructMemo(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [...way, word]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
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
console.log(
  allConstructMemo('aaaaaaaaaaaaaaaaaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
  ])
); //[]
