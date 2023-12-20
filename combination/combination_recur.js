// In Combination, order of elements does not matter

//Time Complexity: O(2^n)
//Space Complexity: O(n^2)
function combination(elements) {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];

  const combsWithoutFirstEl = combination(elements.splice(1));
  const combsWithFirstEl = [];
  combsWithoutFirstEl.forEach((combs) => {
    combsWithFirstEl.push([...combs, firstEl]);
  });
  return [...combsWithoutFirstEl, ...combsWithFirstEl];
}
console.log(combination([1, 2, 3, 4]));
/*
[
  [],          [ 4 ],
  [ 3 ],       [ 4, 3 ],
  [ 2 ],       [ 4, 2 ],
  [ 3, 2 ],    [ 4, 3, 2 ],
  [ 1 ],       [ 4, 1 ],
  [ 3, 1 ],    [ 4, 3, 1 ],
  [ 2, 1 ],    [ 4, 2, 1 ],
  [ 3, 2, 1 ], [ 4, 3, 2, 1 ]
]

*/
