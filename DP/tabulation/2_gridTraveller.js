const gridTraveller = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  /*
        Note that we dont do fill(Array(n+1)) because that would cause
        same array to be placed multiple times. So if we change a specific element,
        same changes will be seen in other arrays as well.
        e.g. table[0][0] = 'x', will cause all the Oth element of each row to be X, not only
         the 0th row's 0th element.
     */
  table[1][1] = 1;
  for (let i = 0; i <= m; ++i) {
    for (let j = 0; j <= n; ++j) {
      const curr = table[i][j];
      if (i + 1 <= m) table[i + 1][j] += curr;
      if (j + 1 <= n) table[i][j + 1] += curr;
    }
  }
  return table[m][n];
};
console.log(gridTraveller(3, 2));
console.log(gridTraveller(18, 18));
