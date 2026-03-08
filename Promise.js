// ==========================================
// PROMISE PRACTICAL QUESTIONS
// ==========================================


// Q1. Basic Promise
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Q2. Promise with setTimeout
const fetchData = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Data received");
    }, 1000);

});

fetchData.then(data => console.log(data));


// Q3. Function returning Promise
function checkAge(age) {

    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not eligible");
        }

    });
}

checkAge(25)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Q4. Promise Chaining
Promise.resolve(10)

    .then(number => number * 2)

    .then(number => number + 5)

    .then(result => console.log(result));


// Q5. Promise.all()
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Products");
const p3 = Promise.resolve("Orders");

Promise.all([p1, p2, p3])
    .then(result => console.log(result));


// Q6. Async/Await with Promise
function getUser() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Deepak"
            });

        }, 1000);

    });
}

async function showUser() {

    const user = await getUser();

    console.log(user);
}

showUser();