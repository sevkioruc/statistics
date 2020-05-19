import { sampleVariance } from "./sample_variance.ts";

/**
 * The [sample standard deviation](http://en.wikipedia.org/wiki/Standard_deviation#Sample_standard_deviation)
 * is the square root of the sample variance.
 *
 * @param {number[]} x input array
 * @returns {number} sample standard deviation
 * @example
 * sampleStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9]).toFixed(2);
 * // => '2.14'
 */
export function sampleStandardDeviation(x: number[]): number {
    // The standard deviation of no numbers is null
    const sampleVarianceX = sampleVariance(x);
    return Math.sqrt(sampleVarianceX);
}
