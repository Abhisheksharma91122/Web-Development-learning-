console.log("oop in javascript");

let obj = {
    1:"abhishek",
    2:"30",
    3:"nashik"
}

// console.log(obj[1]);
// console.log(obj[2]);

let abhi = {
    a:"maharashtra",
    b:"jharkhand"
}
// this is used before oop is not introduced in javascript
// abhi.prototype=obj

class abhishek {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log("this is now running...");
    }
    greed(name,age){
        // this.name = name;
        // this.age = age;
        return `I am ${this.name} and my age is ${this.age}`;
    }
}

let person1 = new abhishek("abhishek",20);
console.log(person1)
console.log(person1.name)
console.log(person1.age)
console.log(person1.greed())


class maths {
    constructor(number) {
        this.number = number;
        console.log(number)
        console.log("this class is now running...");
    }
    sum(a,b){
        console.log("this is the sum of ",a," and ",b," = ",a+b);
    }
}

let addition = new maths(45)
console.log(addition.sum(34,56));
console.log(addition);


class animal {
    constructor(name) {
        this.name = name;
        console.log("animal class is now running...")
    }
    jump(){
        console.log("I am animal i can jump")
    }
    run(){
        console.log("I can also run")
    }
}
class lion extends animal {
    constructor(name) {
        super(name);
        console.log("lion class is now running...")
    }
    eat(){
        console.log("I can eat flesh meat")
    }
    // this is called method overridding 
    run(){
        super.run()
        console.log("I can also run because I am lion")
    }
}

let a = new animal("monkey");
let l = new lion("shera");
console.log(l)

console.log(l instanceof lion);
console.log(l instanceof animal);
console.log(a instanceof lion);
console.log(a instanceof animal);
