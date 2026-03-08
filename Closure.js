// ========================================
// CLOSURE & LEXICAL SCOPE PRACTICE
// ========================================


// 1. Basic Closure
function outer() {
    let name = "Deepak";

    function inner() {
        console.log(name);
    }

    return inner;
}

const result = outer();
result();


// 2. Counter using Closure
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());


// 3. Private Variable
function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance());


// 4. Function Factory
function multiplyBy(number) {

    return function (value) {
        return value * number;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(10));
console.log(triple(10));


// 5. Lexical Scope
let global = "Global";

function parent() {

    let parentValue = "Parent";

    function child() {
        console.log(global);
        console.log(parentValue);
    }

    child();
}

parent();


// 6. Closure with Parameter
function greet(name) {

    return function () {
        console.log(`Hello ${name}`);
    };
}

const greetDeepak = greet("Deepak");

greetDeepak();


// 7. Separate Closures
function counterFactory() {

    let count = 0;

    return function () {
        return ++count;
    };
}

const counter1 = counterFactory();
const counter2 = counterFactory();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1


// 8. Closure with setTimeout
function delayedMessage(message) {

    setTimeout(() => {
        console.log(message);
    }, 1000);
}

delayedMessage("Hello after 1 second");


// 9. Discount Calculator
function createDiscount(discount) {

    return function (price) {
        return price - (price * discount / 100);
    };
}

const tenPercent = createDiscount(10);
const twentyPercent = createDiscount(20);

console.log(tenPercent(1000));
console.log(twentyPercent(1000));


// 10. Interview Example
function outerFunction() {

    let count = 0;

    return function innerFunction() {

        count++;

        console.log(count);
    };
}

const myFunction = outerFunction();

myFunction(); // 1
myFunction(); // 2
myFunction(); // 3
