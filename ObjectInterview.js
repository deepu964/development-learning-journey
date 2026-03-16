// ==========================================
// OBJECT INTERVIEW PRACTICALS
// ==========================================

// Q1 - Loop through object
const user = {
    name: "Deepak",
    age: 25,
    role: "Developer"
};

for (const key in user) {
    console.log(key, user[key]);
}


// Q2 - Convert object to array
console.log(Object.entries(user));


// Q3 - Check property exists
console.log("name" in user);

console.log(
    Object.hasOwn(user, "role")
);


// Q4 - Merge objects
const personal = {
    name: "Deepak",
    age: 25
};

const professional = {
    role: "Developer",
    skill: "JavaScript"
};

const merged = {
    ...personal,
    ...professional
};

console.log(merged);


// Q5 - Count properties
console.log(
    Object.keys(merged).length
);


// Q6 - Sum object values
const marks = {
    js: 80,
    node: 75,
    mongo: 85
};

const total = Object.values(marks)
    .reduce((sum, value) => sum + value, 0);

console.log(total);


// Q7 - Find highest value
const highest = Math.max(
    ...Object.values(marks)
);

console.log(highest);


// Q8 - Object destructuring
const {
    name,
    role
} = merged;

console.log(name, role);


// Q9 - Clone object
const clonedUser = {
    ...user
};

clonedUser.name = "Arun";

console.log(user);
console.log(clonedUser);


// Q10 - Group array of objects

const products = [
    { name: "Watch", category: "Fashion" },
    { name: "Phone", category: "Electronics" },
    { name: "Shirt", category: "Fashion" }
];

const grouped = products.reduce((acc, product) => {

    const category = product.category;

    if (!acc[category]) {
        acc[category] = [];
    }

    acc[category].push(product);

    return acc;

}, {});

console.log(grouped);
