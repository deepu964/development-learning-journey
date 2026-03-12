// ==========================================
// ASYNC / AWAIT PRACTICAL QUESTIONS
// ==========================================

// Q1. Basic async function
async function greet() {
    return "Hello Deepak";
}

greet().then(result => console.log(result));


// Q2. Await a Promise
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function fetchData() {
    const data = await getData();
    console.log(data);
}

fetchData();


// Q3. Error handling with try/catch
function login(password) {
    return new Promise((resolve, reject) => {
        if (password === "1234") {
            resolve("Login successful");
        } else {
            reject("Invalid password");
        }
    });
}

async function userLogin() {
    try {
        const result = await login("1234");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

userLogin();


// Q4. Multiple awaits
function getUser() {
    return Promise.resolve({ id: 1, name: "Deepak" });
}

function getOrders() {
    return Promise.resolve(["Watch", "Phone"]);
}

async function userDetails() {
    const user = await getUser();
    const orders = await getOrders();

    console.log(user);
    console.log(orders);
}

userDetails();


// Q5. Promise.all with async/await
async function loadDashboard() {
    const user = Promise.resolve("User loaded");
    const products = Promise.resolve("Products loaded");
    const orders = Promise.resolve("Orders loaded");

    const result = await Promise.all([
        user,
        products,
        orders
    ]);

    console.log(result);
}

loadDashboard();