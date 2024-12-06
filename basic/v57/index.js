/* this is multiline comment */

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

let obj = {
    name:"Abhishek sharma",
    "role":"programmer",
    "master IN":"money"
}


for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}

for (const element of "Abhishek") {
    console.log(element)
}

// let i = 0;
// while(i<10){
//     console.log(i)
//     i++;
// }

let i =10;
do {
    console.log(i)
} while (i<1);