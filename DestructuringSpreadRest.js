// ==========================================
// DESTRUCTURING, SPREAD & REST
// ==========================================

// Q1. Array destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);


// Q2. Object destructuring
const user = {
    name: "Deepak",
    age: 25,
    city: "Palakkad"
};

const { name, age } = user;

console.log(name);
console.log(age);


// Q3. Rename while destructuring
const product = {
    name: "Watch",
    price: 5000
};

const {
    name: productName,
    price
} = product;

console.log(productName);
console.log(price);


// Q4. Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);


// Q5. Spread with objects
const basicUser = {
    name: "Deepak",
    age: 25
};

const completeUser = {
    ...basicUser,
    role: "Developer"
};

console.log(completeUser);


// Q6. Copy an array
const original = [1, 2, 3];

const copy = [...original];

copy.push(4);

console.log(original);
console.log(copy);


// Q7. Rest parameter
function total(...numbers) {
    return numbers.reduce(
        (sum, number) => sum + number,
        0
    );
}

console.log(total(10, 20, 30, 40));


// Q8. Rest with destructuring
const values = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = values;

console.log(first);
console.log(second);
console.log(remaining);
