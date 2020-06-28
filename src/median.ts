import { numericSort } from "./utils/numeric_sort";

/**
 * The median is the middle number in a sorted, ascending or descending,
 * list of numbers and can be more descriptive of that data set than the average.
 * 
 * If there is an even amount of numbers in the list,
 * the middle pair must be determined, added together, and divided by two to find the median value.
 * 
 * @param {number[]} x input array
 * @returns {number} median value
 * @example 
 * median([3, 2, 1, 5, 4, 6]) // => 3.5
 */
export function median(x: number[]): number {
    
    if (!x.length) {
      throw new Error("min requires at least one data point")
    }

    x = numericSort(x);

    if (x.length % 2 !== 0) {
        return x[Math.floor(x.length/2)];
    }

    return (x[Math.floor(x.length/2)] + x[Math.floor(x.length/2) + 1]) / 2;

}
