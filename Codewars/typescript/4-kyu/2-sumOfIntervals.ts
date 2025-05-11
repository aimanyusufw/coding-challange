// Codewars 2
// Title :  Sum of intervals
// Question :   Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths.
// Challange Url :  https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/typescript
// Level : 4kyu

// Method : 1
export function sumOfIntervals(intervals: [number, number][]) {
  if (intervals.length === 0) {
    return 0;
  }

  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);

  const mergedIntervals: [number, number][] = [];
  let currentInterval = sortedIntervals[0];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];

    if (interval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    } else {
      mergedIntervals.push(currentInterval);
      currentInterval = interval;
    }
  }

  mergedIntervals.push(currentInterval);

  let sum = 0;
  for (const [start, end] of mergedIntervals) {
    sum += end - start;
  }

  return sum;
}

// Method : 2

// Other Users Method
