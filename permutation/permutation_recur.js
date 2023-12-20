//in permutation order of elements matters
//Time Complexity: O(n!)
//Space Complexity: O(n^2)

function permutation(elements) {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const permsWithoutFirstEl = permutation(elements.slice(1));
  const allPermutations = [];

  permsWithoutFirstEl.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      allPermutations.push([...perm.slice(0, i), firstEl, ...perm.slice(i)]);
    }
  });
  return allPermutations;
}

console.log(permutation([1, 2, 3]));
/*

[
  [ 1, 2, 3 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 1, 3, 2 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]

*/
