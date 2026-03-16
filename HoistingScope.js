// ==========================================
// HOISTING & SCOPE PRACTICE
// ==========================================

// Q1 - var hoisting
console.log(a); // undefined
var a = 10;


// Q2 - Function declaration hoisting
greet();

function greet() {
    console.log("Hello");
}


// Q3 - Global vs Local Scope
let name = "Deepak";

function showName() {
    let role = "Developer";

    console.log(name);
    console.log(role);
}

showName();


// Q4 - Block Scope
{
    let x = 10;
    const y = 20;

    console.log(x, y);
}

// console.log(x); // ReferenceError


// Q5 - var is function scoped
function testVar() {

    if (true) {
        var value = 100;
    }

    console.log(value);
}

testVar();


// Q6 - let is block scoped
function testLet() {

    if (true) {
        let number = 50;
        console.log(number);
    }

    // console.log(number); // ReferenceError
}

testLet();


// Q7 - Shadowing
let message = "Global";

function test() {

    let message = "Local";

    console.log(message);
}

test();

console.log(message);
