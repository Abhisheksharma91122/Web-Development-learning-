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


let a = Math.random();

function Adj(a) {
    if (a > 0.45) {
        return "Crazy";
    } else if(a > 0.75){
        return "Amazing";
    } else {
        return "Fire";
    }
}
function Shop(a) {
    if (a > 0.45) {
        return "Engine";
    } else if(a > 0.75){
        return "Food";
    } else {
        return "Garment";
    }
}
function Other(a) {
    if (a > 0.45) {
        return "Bros"
    } else if(a > 0.75){
        return "Limited";
    } else {
        return "Hub";
    }
}

let Adjective = Adj(a);
let Shopname = Shop(a);
let Othername = Other(a);
console.log(Adjective,Shopname,Othername);
