//Time Complexity: O(n^2)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
console.log(bubbleSort([2, 3, 10, 5, 44, 1, 7, 6, 23, -8]));
