function fun(name) {
        console.log("Hey "+ name + " you are nice");       
        console.log("Hey "+ name + " you are good");       
        console.log("Hey "+ name + " best coder");       
        console.log("Hey "+ name + " nice programmer");       
}

// fun("Abhishek");
// fun("Anup");
function sum(a,b,c=5) {
    // console.log(a+b);
    return a+b+c;
}

var ans1 = sum(23,42);
var ans2 = sum(75,95);
var ans3 = sum(1,5,7);

console.log("the sum of this two number is : " + ans1);
console.log("the sum of this two number is : " + ans2);
console.log("the sum of this two number is : " + ans3);


function square(a) {
    console.log(a*a);
}

square(5);


const abhi= (x) =>{
    console.log("I am an arrow function : "+x);
}

abhi(54);