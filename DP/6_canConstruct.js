/**
 * canConstruct(target, wordBank)
 * - return a boolean indicating whether 'target' can be constructed by concatenating
 *  elements of 'wordBank' array
 * - we may reuse elements of 'wordBank' as many times as needed
 */

//Recursive Solution 1
/*
function canConstruct(target, wordBank, start = '') {
  if (start === target) return true;
  for (let str of wordBank) {
    const concat = start + str;
    if (concat === target) return true;
    if (target.startsWith(concat)) {
      if (canConstruct(target, wordBank, concat) === true) return true;
    }
  }
  return false;
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //t
console.log(canConstruct('', ['a', 'le', 'cat'])); //t
console.log(canConstruct('apple', ['a', 'le', 'ap', 'appl', 'e']));//t
console.log(canConstruct('apple', ['a', 'e', 'ap', 'app', 'e']));//f
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);//f
*/

/**
 * Recursive Solution 2
 * m - length of target
 * n - wordBank Length
 * Time : O(n^m * m) -> *m because of replace function
 * Space: O(m*m) -> beacuse replace return a new string
 */
/*
function canConstruct(target, wordBank) {
  if (target === '') return true;
  for (let str of wordBank) {
    if (target.startsWith(str)) {
      if (canConstruct(target.replace(str, ''), wordBank) === true) return true;
    }
  }
  return false;
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //t
console.log(canConstruct('', ['a', 'le', 'cat'])); //t
console.log(canConstruct('apple', ['a', 'le', 'ap', 'appl', 'e'])); //t
console.log(canConstruct('apple', ['a', 'e', 'ap', 'app', 'e'])); //f
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); //f
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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
function canConstructMemo(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return true;
  for (let str of wordBank) {
    if (target.startsWith(str)) {
      if (canConstructMemo(target.replace(str, ''), wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}
console.log(canConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //t
console.log(canConstructMemo('', ['a', 'le', 'cat'])); //t
console.log(canConstructMemo('apple', ['a', 'le', 'ap', 'appl', 'e'])); //t
console.log(canConstructMemo('apple', ['a', 'e', 'ap', 'app', 'e'])); //f
console.log(
  canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); //f
console.log(
  canConstructMemo('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); //false
