import { assertEquals, assertThrows } from 'https://deno.land/std/testing/asserts.ts';
import { median } from "./median.ts";

const { test } = Deno;

test("median", () => {
  assertEquals(median([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]), 23);
  assertEquals(median([1, 4, 2, 3, 5, 6, 8, 7]), 4.5);

  assertThrows(
    (): void => {
      median([]);
    },
    Error,
    "median requires at least one data point"
  );
});
