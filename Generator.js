// ==========================================
// GENERATOR FUNCTION PRACTICE
// ==========================================

// Q1. Basic generator
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// Q2. Generator loop
function* colors() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

for (const color of colors()) {
    console.log(color);
}


// Q3. Infinite ID generator
function* idGenerator() {
    let id = 1;

    while (true) {
        yield id++;
    }
}

const ids = idGenerator();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);


// Q4. Generator with arguments
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

console.log([...range(1, 5)]);


// Q5. Generator for products
function* products() {
    yield { id: 1, name: "Watch" };
    yield { id: 2, name: "Phone" };
    yield { id: 3, name: "Laptop" };
}

const productGenerator = products();

console.log(productGenerator.next().value);
console.log(productGenerator.next().value);