// Q1 - Synchronous execution

console.log("A");
console.log("B");
console.log("C");

// Output:
// A
// B
// C


// Q2 - setTimeout

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timer


// Q3 - Promise vs setTimeout

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

// Output:
// 1
// 4
// 3
// 2


// Q4 - Multiple Promises

console.log("Start");

Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"));

console.log("End");

// Output:
// Start
// End
// Promise 1
// Promise 2


// Q5 - Interview Question

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
    .then(() => console.log("Promise"));

console.log("Normal");

// Output:
// Normal
// Promise
// Timeout