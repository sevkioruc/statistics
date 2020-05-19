/**
 * The Root Mean Square (RMS) is
 * a mean function used as a measure of the magnitude of a set
 * of numbers, regardless of their sign.
 * This is the square root of the mean of the squares of the
 * input numbers.
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {number[]} x a sample of one or more data points
 * @returns {number} root mean square
 * @throws {Error} if x is empty
 * @example
 * rootMeanSquare([-1, 1, -1, 1]); // => 1
 */
export function rootMeanSquare(x: number[]): number {
  if (!x.length) {
      throw new Error("rootMeanSquare requires at least one data point");
  }

  let sumOfSquares = 0;
  for (let i = 0; i < x.length; i++) {
      sumOfSquares += Math.pow(x[i], 2);
  }

  return Math.sqrt(sumOfSquares / x.length);
}
