// ==========================================
// ARRAY METHODS PRACTICAL QUESTIONS
// ==========================================

const products = [
    { id: 1, name: "Watch", price: 5000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Laptop", price: 50000 },
    { id: 4, name: "Headphone", price: 3000 }
];


// Q1. map() - get product names
const names = products.map(product => product.name);

console.log(names);


// Q2. filter() - products above 5000
const expensiveProducts = products.filter(
    product => product.price > 5000
);

console.log(expensiveProducts);


// Q3. find() - find product using id
const product = products.find(
    product => product.id === 2
);

console.log(product);


// Q4. reduce() - calculate total price
const total = products.reduce(
    (sum, product) => sum + product.price,
    0
);

console.log("Total:", total);


// Q5. some()
const hasExpensiveProduct = products.some(
    product => product.price > 40000
);

console.log(hasExpensiveProduct);


// Q6. every()
const allAbove1000 = products.every(
    product => product.price > 1000
);

console.log(allAbove1000);


// Q7. sort() by price
const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);

console.log(sortedProducts);


// Q8. Remove duplicate numbers
const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(numbers)];

console.log(unique);


// Q9. Find maximum number
const values = [10, 70, 20, 90, 40];

const maximum = Math.max(...values);

console.log(maximum);


// Q10. Method chaining
const result = products
    .filter(product => product.price > 4000)
    .map(product => product.name);

console.log(result);