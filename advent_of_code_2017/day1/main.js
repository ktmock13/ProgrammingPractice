// PROBLEM
// The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match
// the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.
//
// EXAMPLE
//
// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches
// the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.

// SOLUTION
// take the string input and split it into a char array

const input = require('fs')
  .readFileSync('input.txt')
  .toString();

console.log(input);

const nums = input.split('');

// reduce the array, init the accumulato to 0
const result = nums.reduce((acc, curr, i, arr) => {
  // convert String to number
  const current = parseInt(curr, 10);
  // find the current value's neighboring digit, if it's the last digit compare to the first
  const next = i + 1 === arr.length ? arr[arr.length - 1] : parseInt(arr[i + 1], 10);
  // if the neighboring digi matches, add the current vaue to the accumulator
  if (current === next) return parseInt(acc, 10) + current;
  // return just the accumulator (none added) if the neighbor doesnt match
  return acc;
}, 0);

console.log(result);

// PART TWO

// Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That
// is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it.
// Fortunately, your list has an even number of elements.
//
// For example:
//
// 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
// 1221 produces 0, because every comparison is between a 1 and a 2.
// 123425 produces 4, because both 2s match each other, but no other digit has a match.
// 123123 produces 12.
// 12131415 produces 4.

// SOLUTION

const result2 = nums.reduce((acc, curr, i, arr) => {
  const current = parseInt(curr, 10);
  // offset the 'next' compare value by half the array (use mod % to account for wrap-around)
  const indexToCompare = ((i + arr.length) / 2) % arr.length;

  const next = i + 1 === arr.length ? arr[arr.length - 1] : parseInt(arr[indexToCompare], 10);
  if (current === next) return parseInt(acc, 10) + current;
  return acc;
}, 0);

console.log(result2);
