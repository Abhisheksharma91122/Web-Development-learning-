
let a = 5;

function fact(number) {
    let a = Array.from(Array(number+1).keys())
    a.shift();
    
    console.log(a.reduce((a,b) => {
        return a*b;
    }));
}


function factfor(number){
    let fact =1;
    for (let index = 1; index <= number; index++) {
        fact *= index;
    }
    console.log(fact);
}
fact(a);
factfor(a);