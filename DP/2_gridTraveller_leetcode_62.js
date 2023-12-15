/**
 * Leetcode #62 (medium)
 * ---------------------
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 */

/*
//Using Recursion
// Time : O(2^(m+n)) ... O(2^max(m,n))??
// Space: O(m+n) .. O (max(m,n))??
function gridTraveller(m, n) {
  if (m === 0 || n === 0) return 0; //Grid with 0 rows or col has no path
  if (m === 1 && n === 1) return 1; // 1X1 grid has 1 possible path
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1); //m-1 is moving down, n-1 is moving right
}
console.log(gridTraveller(3, 7));
console.log(gridTraveller(18, 18)); //takes LOOOOOOOOOOOOONG
*/

//Using Dynamic Programming Technique (Memoization)
//Time: O(m*n)
//Space: O(m+n)...O(max(m,n))??
function gridTraveller(m, n, memo = {}) {
  let key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveller(3, 7));
console.log(gridTraveller(18, 18)); //2333606220
