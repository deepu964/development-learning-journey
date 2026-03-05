// 1. Reverse a string
const str = "javascript";
console.log(str.split("").reverse().join(""));


// 2. Check palindrome
const word = "malayalam";

const reversed = word.split("").reverse().join("");

console.log(word === reversed);


// 3. Count vowels
const text = "javascript";

const vowels = text
    .split("")
    .filter(char => "aeiou".includes(char));

console.log(vowels.length);


// 4. Convert first letter to uppercase
const name = "deepak";

const capitalized =
    name.charAt(0).toUpperCase() + name.slice(1);

console.log(capitalized);


// 5. Count characters
const message = "hello";

console.log(message.length);


// 6. Remove spaces
const sentence = "hello world javascript";

console.log(sentence.replaceAll(" ", ""));


// 7. Find a word
const language = "I am learning JavaScript";

console.log(language.includes("JavaScript"));


// 8. Count occurrence of each character
const value = "hello";

const count = {};

for (let char of value) {
    count[char] = (count[char] || 0) + 1;
}

console.log(count);


// 9. Find longest word
const sentence2 = "JavaScript is powerful language";

const longest = sentence2
    .split(" ")
    .reduce((long, word) =>
        word.length > long.length ? word : long
    );

console.log(longest);


// 10. Remove duplicate characters
const duplicate = "programming";

const unique = [...new Set(duplicate)].join("");

console.log(unique);