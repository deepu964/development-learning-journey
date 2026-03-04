// ==========================================
// JavaScript Object Practical Questions
// ==========================================

// Q1. Create an object and access its properties
const user = {
    name: "Deepak",
    age: 25,
    role: "Developer"
};

console.log(user.name);
console.log(user["role"]);


// Q2. Add a new property to an object
user.city = "Palakkad";

console.log(user);


// Q3. Update an existing property
user.age = 26;

console.log(user);


// Q4. Delete a property
delete user.role;

console.log(user);


// Q5. Get all keys from an object
const product = {
    name: "Watch",
    price: 5000,
    brand: "Casio"
};

console.log(Object.keys(product));


// Q6. Get all values from an object
console.log(Object.values(product));


// Q7. Get key-value pairs
console.log(Object.entries(product));


// Q8. Loop through an object
for (let key in product) {
    console.log(key, product[key]);
}


// Q9. Find the total value from an object
const marks = {
    maths: 80,
    english: 70,
    science: 90
};

const total = Object.values(marks)
    .reduce((sum, mark) => sum + mark, 0);

console.log("Total:", total);


// Q10. Convert an array of objects into an object using id

const users = [
    { id: 1, name: "Deepak" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Rahul" }
];

const userObject = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});

console.log(userObject);