// Q1 - Remove duplicates using Set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];

console.log(unique);


// Q2 - Check value exists
const skills = new Set(["JavaScript", "React", "Node"]);

console.log(skills.has("React"));


// Q3 - Add and delete values
skills.add("MongoDB");
skills.delete("Node");

console.log(skills);


// Q4 - Basic Map
const user = new Map();

user.set("name", "Deepak");
user.set("role", "Developer");
user.set("age", 25);

console.log(user.get("name"));


// Q5 - Loop Map
for (const [key, value] of user) {
    console.log(key, value);
}


// Q6 - Count occurrences
const arr = ["a", "b", "a", "c", "b", "a"];

const count = new Map();

arr.forEach(item => {
    count.set(item, (count.get(item) || 0) + 1);
});

console.log(count);