let random = Math.random()
console.log(random);
let a = prompt("enter first number : ");
let b = prompt("enter operation : ");
let c = prompt("enter second number : ");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random>0.1) {
    // perform correct operation
    console.log(`the result is${a},${b},${c}`);
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
} else {
    b = obj[b];
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
}