console.log("js initializing")
// let box = document.getElementsByClassName("box");
let box = document.querySelector(".container").children

function getRandomColor(){
    // formula to generate a random color 
    // a + Math.random() * (b-a)
    let val1 = Math.floor(0 + Math.random() * 255);
    let val2 = Math.floor(0 + Math.random() * 255);
    let val3 = Math.floor(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
}

Array.from(box).forEach(e => {
    e.style.backgroundColor = getRandomColor();
     let a = e.style.color = getRandomColor();
    console.log(a)
})