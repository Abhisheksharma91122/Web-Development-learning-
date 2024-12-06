console.log("Hello world")
let age = 15;
let grace = 2;
if(age>=18){
    console.log("you can drive");
}else{
    console.log("you cannot drive");
}

console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age%grace);
console.log(age**grace);

let grade = 54;

if(grade>=90 && grade <100){
    console.log("your grade is A")
}
else if(grade>=80 && grade <90){
    console.log("your grade is B")
}
else if(grade>=70 && grade <80){
    console.log("your grade is C")
}
else{
    console.log("your grade is like fail")
}

let a = 12;
let b = 6;
let c = a>b? (a-b):(b-a)
console.log(c)