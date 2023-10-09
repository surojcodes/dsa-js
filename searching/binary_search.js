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

/*
Why does calculating mid-point have to be so complex?
Suppose your 'l' and 'r' are 16 bit unsigned integers. 
That means, they can only have a maximum value of 2^16=65536. 
Consider this, l = 65530 r = 65531
If we added them first, (l+r) would end up being junk since that big a number (131061)
cannot be stored in a your 16-bit integer.
And so, m  would be a wrong value.
*/
