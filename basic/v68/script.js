console.log("Abhishek Sharma");

let a = document.getElementsByClassName("box");

a[2].style.backgroundColor = "red";

console.log(document.getElementsByClassName("box"));
console.log(a[2]);

document.getElementById("redbox").style.backgroundColor = "Green";

// document.querySelector(".box").style.backgroundColor = "black";
// document.querySelector(".box").style.color = "white";

console.log(document.querySelectorAll(".box"));

// document.querySelectorAll(".box").style.backgroundColor = "blue"; This is not allowed because we setting backgroundcolor to a html collection or node list
document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "red";
})

console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByName("body"))

// matches css given selection

let x = document.getElementsByTagName("div")
console.log(x);
console.log(x[5].matches("#redbox"))

console.log(x[4].closest("#redbox"));
console.log(x[4].closest("html"));
console.log(x[4].closest(".container"));


console.log(document.querySelector(".container").contains(x[3]))
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body"));
console.log(document.querySelector(".container"));