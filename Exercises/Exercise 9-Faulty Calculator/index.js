let random = Math.random();

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let o = prompt("Enter operation (+, -, *, /)");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // perform right calculation
    alert(`The result is ${eval(`${a} ${o} ${b}`)}`);
} else {
    // perform wrong calculation
    o = obj[o];
    alert(`The result is ${eval(`${a} ${o} ${b}`)}`);
}
