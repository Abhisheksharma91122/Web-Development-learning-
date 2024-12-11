// calculate a factorial of a number using for loop and reduce method in javascript 

let number = prompt("Enter a number: ");

let product = 1;

for (let index = 1; index <= number; index++) {
    product *= index;
}

console.log(product);
let arr = [];
for (let index = 0; index < number; index++) {
    arr[index] = index+1;
}
console.log(arr);
let fact = (a,b)=>{
    return a*b;
}

console.log(arr.reduce(fact));