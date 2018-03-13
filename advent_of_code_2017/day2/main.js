// PROBLEM
// The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right
// track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the
// largest value and the smallest value; the checksum is the sum of all of these differences.

// EXAMPLE
// given the following spreadsheet:
//
// 5 1 9 5
// 7 5 3
// 2 4 6 8
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.

// SOLUTION

// read in the input file to a string
const input = require('fs')
  .readFileSync('input.txt')
  .toString();

// map the string into a 2D array and convert the values to integers
const lines = input.split('\n').map(line => line.split('\t').map(num => parseInt(num, 10)));

// helper function that accepts an array of integers and returns it's checksum
const toChecksum = (line) => {
  let high = 0;
  let low = 0;
  // find high and low values
  line.forEach((num, i) => {
    if (i === 0) {
      // if this is the first pass through, the high and low are the first value
      high = num;
      low = num;
    } else {
      // if the current val is higher/lower than the stored vals, set them accordingly
      high = high > num ? high : num;
      low = low < num ? low : num;
    }
  });
  // return checksum
  return high - low;
};

// map each line of numbers to its checksum
const lineChecksums = lines.map(line => toChecksum(line));
// reduce all of the lines to their sum
const finalChecksum = lineChecksums.reduce((acc, curr) => acc + (curr || 0));

// print
console.log(finalChecksum);
