// Q1. Find the largest number

const arr = [10, 25, 5, 40, 15];

let max = arr[0];

for (let num of arr) {
  if (num > max) {
    max = num;
  }
}

console.log(max);


// Q2. Find the second largest number
// const arr = [10, 25, 5, 40, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log(secondLargest);