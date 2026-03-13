// Q1 - Basic Class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`I am ${this.name}`);
    }
}

const user = new User("Deepak", 25);
user.introduce();


// Q2 - Inheritance
class Developer extends User {
    constructor(name, age, skill) {
        super(name, age);
        this.skill = skill;
    }

    code() {
        console.log(`${this.name} works with ${this.skill}`);
    }
}

const developer = new Developer(
    "Deepak",
    25,
    "JavaScript"
);

developer.introduce();
developer.code();


// Q3 - Getter and Setter
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value > 0) {
            this._price = value;
        }
    }
}

const product = new Product("Watch", 5000);

product.price = 6000;

console.log(product.price);


// Q4 - Static Method
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(10, 20));


// Q5 - Private Field
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(5000);

console.log(account.getBalance());