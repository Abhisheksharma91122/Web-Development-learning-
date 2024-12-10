let arr = [1,2,5,4,8];

arr[0]=50;

console.log(arr , typeof(arr));
console.log(arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
let a = [1,2,3,4];
a.shift();
a.pop();
a.push("abhishek");
a.unshift("Aditya");
delete a[3];
console.log(a);

console.log(arr.toString());
console.log(arr.join(" And "));

let x = [1,2,3];
let y = [4,5,6];
let f = [7,8,9];

console.log(`${x.concat(y,f)}`);

