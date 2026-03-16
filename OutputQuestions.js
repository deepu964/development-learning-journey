// ==========================================
// JAVASCRIPT OUTPUT QUESTIONS
// ==========================================

// Q1
console.log(1 + "2");
// "12"


// Q2
console.log("5" - 2);
// 3


// Q3
console.log(true + true);
// 2


// Q4
console.log(null == undefined);
// true

console.log(null === undefined);
// false


// Q5
console.log(typeof null);
// "object"


// Q6
console.log(typeof []);
// "object"


// Q7
console.log([] == false);
// true


// Q8
let a = 10;

function test() {
    let a = 20;
    console.log(a);
}

test();
console.log(a);

// 20
// 10


// Q9
for (var i = 0; i < 3; i++) {

    setTimeout(() => {
        console.log(i);
    }, 100);
}

// 3
// 3
// 3


// Q10
for (let j = 0; j < 3; j++) {

    setTimeout(() => {
        console.log(j);
    }, 100);
}

// 0
// 1
// 2