// ==========================================
// CURRYING PRACTICAL QUESTIONS
// ==========================================

// Q1. Add three numbers using currying
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30)); // 60


// Q2. Multiply three numbers
const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4)); // 24


// Q3. Create discount calculator
const discount = percentage => price => {
    return price - (price * percentage / 100);
};

const tenPercent = discount(10);

console.log(tenPercent(1000)); // 900
console.log(tenPercent(2000)); // 1800


// Q4. Create greeting function
const greet = greeting => name => {
    return `${greeting} ${name}`;
};

const sayHello = greet("Hello");

console.log(sayHello("Deepak"));


// Q5. Filter numbers using currying
const greaterThan = min => number => number > min;

const numbers = [10, 20, 30, 40, 50];

console.log(numbers.filter(greaterThan(25)));
// [30, 40, 50]
