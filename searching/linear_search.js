//TIme Complexity: O(n) ,n being size of array
//Space Complexity: O(1)
function liner_search(haystack, needle) {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

const arr = [12, 34, 55, 67];
console.log(liner_search(arr, 100));
console.log(liner_search(arr, 55));
