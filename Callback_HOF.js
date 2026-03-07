// ========================================
// CALLBACK & HIGHER-ORDER FUNCTION
// ========================================


// 1. Basic Callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Welcome!");
}

greet("Deepak", finish);


// 2. Callback with calculation
function calculate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(10, 20, add));


// 3. Arrow function as callback
function operation(a, b, callback) {
    return callback(a, b);
}

console.log(
    operation(10, 5, (a, b) => a * b)
);


// 4. forEach Callback
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num);
});


// 5. map() Higher-Order Function
const nums = [1, 2, 3, 4];

const doubled = nums.map((num) => {
    return num * 2;
});

console.log(doubled);


// 6. filter() Higher-Order Function
const values = [10, 15, 20, 25, 30];

const even = values.filter((num) => {
    return num % 2 === 0;
});

console.log(even);


// 7. reduce() Higher-Order Function
const prices = [100, 200, 300, 400];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total:", total);


// 8. Custom Higher-Order Function
function calculator(operation) {

    if (operation === "add") {
        return (a, b) => a + b;
    }

    if (operation === "multiply") {
        return (a, b) => a * b;
    }
}

const addition = calculator("add");
const multiplication = calculator("multiply");

console.log(addition(5, 5));
console.log(multiplication(5, 5));


// 9. Simulate asynchronous callback
function getUser(callback) {

    setTimeout(() => {

        const user = {
            id: 1,
            name: "Deepak"
        };

        callback(user);

    }, 1000);
}

getUser((user) => {
    console.log("User:", user);
});


// 10. Callback with Error Handling
function divide(a, b, callback) {

    if (b === 0) {
        callback("Cannot divide by zero", null);
        return;
    }

    callback(null, a / b);
}

divide(10, 2, (error, result) => {

    if (error) {
        console.log(error);
        return;
    }

    console.log("Result:", result);
});
