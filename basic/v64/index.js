// creat an business name generator by combining list of adjectives and shop name and other words 

/*

Adjective : 
Crazy 
Amazing 
Fire

Shop name : 
Engine 
Food
Garments 

Other words : 
Bros
Limited 
Hub

*/



let rand = Math.random();
let first , second , third;

if (rand<0.33) {
    first = "Crazy";
} else if (rand <0.66 && rand >=0.33) {
    first = "Amazing";
} else {
    first = "Fire";
}

rand = Math.random();
if (rand<0.33) {
    second = "Engine";
} else if (rand <0.66 && rand >=0.33) {
    second = "Food";
} else {
    second = "Garments";
}
rand = Math.random();
if (rand<0.33) {
    third = "Bros";
} else if (rand <0.66 && rand >=0.33) {
    third = "Limited";
} else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);