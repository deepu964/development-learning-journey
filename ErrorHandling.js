// Q1 - Basic try/catch
try {
    const result = unknownVariable;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}


// Q2 - throw custom error
function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
}


// Q3 - finally
try {
    console.log("Processing...");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Operation completed");
}


// Q4 - Validation
function registerUser(name, age) {

    if (!name) {
        throw new Error("Name is required");
    }

    if (age < 18) {
        throw new Error("User must be 18+");
    }

    return "Registration successful";
}

try {
    console.log(registerUser("Deepak", 25));
} catch (error) {
    console.log(error.message);
}


// Q5 - Async error handling
async function fetchUser() {

    try {
        const response = await Promise.reject(
            new Error("User not found")
        );

        console.log(response);

    } catch (error) {
        console.log(error.message);
    }
}

fetchUser();