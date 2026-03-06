// 1. Regular Function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// 2. Arrow Function
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));


// 3. Check Even or Odd
function checkNumber(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkNumber(7));


// 4. Find Largest Number
function largest(a, b, c) {
    return Math.max(a, b, c);
}

console.log(largest(10, 50, 30));


// 5. Function Expression
const greet = function(name) {
    return `Hello ${name}`;
};

console.log(greet("Deepak"));


// 6. Default Parameter
function calculatePrice(price, discount = 10) {
    return price - (price * discount / 100);
}

console.log(calculatePrice(1000));


// 7. Rest Parameter
function total(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(total(10, 20, 30, 40));


// 8. Callback Function
function processUser(name, callback) {
    callback(name);
}

processUser("Deepak", function(name) {
    console.log(`Welcome ${name}`);
});


// 9. Higher Order Function
function calculate(a, b, operation) {
    return operation(a, b);
}

const addition = (a, b) => a + b;

console.log(calculate(10, 5, addition));


// 10. IIFE
(function() {
    console.log("IIFE executed");
})();