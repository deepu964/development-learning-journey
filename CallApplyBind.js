// ==========================================
// CALL, APPLY, BIND PRACTICAL QUESTIONS
// ==========================================

const user = {
    name: "Deepak",
    city: "Palakkad"
};


// Q1. call()
function introduce() {
    console.log(`My name is ${this.name}`);
}

introduce.call(user);


// Q2. call() with arguments
function details(age, role) {
    console.log(
        `${this.name} is ${age} years old and works as ${role}`
    );
}

details.call(user, 25, "Developer");


// Q3. apply()
function detailsApply(age, role) {
    console.log(
        `${this.name} - ${age} - ${role}`
    );
}

detailsApply.apply(user, [25, "Developer"]);


// Q4. bind()
function welcome() {
    console.log(`Welcome ${this.name}`);
}

const welcomeDeepak = welcome.bind(user);

welcomeDeepak();


// Q5. Borrow method from another object
const person1 = {
    name: "Deepak",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

const person2 = {
    name: "Arun"
};

person1.greet.call(person2);


// Q6. bind() with arguments
function calculatePrice(discount) {

    const finalPrice =
        this.price - (this.price * discount / 100);

    console.log(finalPrice);
}

const product = {
    price: 5000
};

const calculate = calculatePrice.bind(product, 10);

calculate(); // 4500