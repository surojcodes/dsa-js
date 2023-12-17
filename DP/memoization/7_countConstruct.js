/**
 * canConstruct(target, wordBank)
 * - return a total number of ways 'target' can be constructed by concatenating
 *  elements of 'wordBank' array
 * - we may reuse elements of 'wordBank' as many times as needed
 */

/**
 * Recursive Solution
 * m - length of target
 * n - wordBank Length
 * Time : O(n^m * m) -> *m because of replace function
 * Space: O(m*m) -> beacuse replace return a new string
 */
/*
function countConstruct(target, wordBank) {
  if (target === '') return 1;
  let count = 0;
  for (let str of wordBank) {
    if (target.startsWith(str)) {
      const n = countConstruct(target.replace(str, ''), wordBank);
      count += n;
    }
  }
  return count;
}
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
); //takes a loooooooooooooooooooooooooong time
*/

/**
 * Using Memoization
 * m - length of target
 * n - wordBank Length
 * Time : O(n*m*m)
 * Space: O(m*m)
 */

function countConstructMemo(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let count = 0;
  for (let str of wordBank) {
    if (target.startsWith(str)) {
      const n = countConstructMemo(target.replace(str, ''), wordBank, memo);
      count += n;
    }
  }
  memo[target] = count;
  return count;
}
console.log(countConstructMemo('apple', ['a', 'le', 'ap', 'appl', 'e'])); //1
console.log(countConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
console.log(countConstructMemo('apple', ['a', 'e', 'ap', 'app', 'e'])); //0
console.log(
  countConstructMemo('skateboard', [
    'bo',
    'rd',
    'ate',
    't',
    'ska',
    'sk',
    'boar',
  ])
); //0

console.log(
  countConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //0
