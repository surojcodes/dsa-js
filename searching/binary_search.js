function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    let v = arr[m];
    if (v === target) return true;
    else if (v < target) l = m + 1;
    else r = m - 1;
  }
  return false;
}

let arr = [-9, 8, 45, 66, 78, 90, 100];
console.log(binarySearch(arr, 100));
console.log(binarySearch(arr, -9));
console.log(binarySearch(arr, 66));
console.log(binarySearch(arr, 10));
