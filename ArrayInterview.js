// ==========================================
// ARRAY INTERVIEW PRACTICALS
// ==========================================

// Q1 - Find largest number
const numbers = [10, 45, 2, 99, 34];

console.log(Math.max(...numbers));


// Q2 - Find second largest
const arr = [10, 50, 20, 40, 50];

const unique = [...new Set(arr)];

unique.sort((a, b) => b - a);

console.log(unique[1]);


// Q3 - Separate even and odd
const values = [1, 2, 3, 4, 5, 6];

const even = values.filter(num => num % 2 === 0);
const odd = values.filter(num => num % 2 !== 0);

console.log("Even:", even);
console.log("Odd:", odd);


// Q4 - Sum of array
const total = values.reduce(
    (sum, num) => sum + num,
    0
);

console.log(total);


// Q5 - Remove duplicates
const duplicate = [1, 2, 2, 3, 3, 4];

console.log([...new Set(duplicate)]);


// Q6 - Reverse without reverse()
const original = [1, 2, 3, 4, 5];

const reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log(reversed);


// Q7 - Find missing number
const nums = [1, 2, 3, 5];

const n = 5;

const expected = (n * (n + 1)) / 2;

const actual = nums.reduce(
    (sum, num) => sum + num,
    0
);

console.log("Missing:", expected - actual);


// Q8 - Flatten array
const nested = [1, [2, 3], [4, [5]]];

console.log(nested.flat(Infinity));


// Q9 - Find duplicates
const data = [1, 2, 3, 2, 4, 3];

const duplicates = data.filter(
    (value, index) =>
        data.indexOf(value) !== index
);

console.log([...new Set(duplicates)]);


// Q10 - Sort without sort()
const input = [5, 2, 8, 1, 3];

for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < input.length - 1; j++) {

        if (input[j] > input[j + 1]) {

            [input[j], input[j + 1]] =
                [input[j + 1], input[j]];
        }
    }
}

console.log(input);