console.log('this is promises');
alert('this is user define snippets');


let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("the random is not supported!")
    } else {
        setTimeout(() => {
            console.log('work is done');
            resolve("Abhishek")
        }, 3000);
    }

})
let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("the random is not supported! 2")
    } else {
        setTimeout(() => {
            console.log('work is done 2');
            resolve("Abhishek 2")
        }, 3000);
    }

})

prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

let prom3 = Promise.all([prom1,prom2]);

prom3.then(e=>{
    console.log(e);
}).catch(err=>{
    console.log(err);
})