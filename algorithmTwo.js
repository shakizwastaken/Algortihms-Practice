/**
 * Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
 *
 * For Example:
 *
 * [
 *   [1, 2, 3, 4, 5],       // minimum value of row is 1
 *   [5, 6, 7, 8, 9],       // minimum value of row is 5
 *   [20, 21, 34, 56, 100]  // minimum value of row is 20
 * ]
 * So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26
 *
 * Note: You will be always given non-empty array containing Positive values.
 *
 * ENJOY CODING :)
 *
 * @param {Array} arr
 * @return {number}
 */
const arr = [
  [1, 2, 3, 4, 5], // minimum value of row is 1
  [5, 6, 7, 8, 9], // minimum value of row is 5
  [20, 21, 34, 56, 100], // minimum value of row is 20
];

function sumOfMinimums(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0);
}
