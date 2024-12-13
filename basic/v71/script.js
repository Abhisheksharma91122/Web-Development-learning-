
console.log("Abhishek Sharma")

console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").textContent)

console.log(document.querySelector(".container").hidden)
// this is used to hidden a contain
// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "Abhishek Sharma";

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
document.querySelector(".box").setAttribute("style" , "display : inline")
console.log(document.querySelector(".box").getAttribute("style"))
document.querySelector(".box").removeAttribute("style")
console.log(document.querySelector(".box").attributes)

// document.designMode = "on";

console.log(document.querySelector(".box").dataset);

let div = document.createElement("div")
div.innerHTML = "<b>Abhishek is Good boy</b>";
div.setAttribute("class" , "createdby");
// this append the element end of the node 
// document.querySelector(".container").append(div);
// this append the element beginning of the node 
document.querySelector(".container").prepend(div);
// this insert the element before the node
document.querySelector(".container").before(div);
// this insert the element after the node 
document.querySelector(".container").after(div);
// this replace the node with this html
// document.querySelector(".container").remove(div);

let cont = document.querySelector(".container");
// we can insert html , text and element to a node or say html 
cont.insertAdjacentHTML("beforebegin" , "<span> This is inserted html </span>")
cont.insertAdjacentHTML("afterbegin" , "<span> This is inserted html </span>")
cont.insertAdjacentHTML("beforeend" , "<span> This is inserted html </span>")
cont.insertAdjacentHTML("afterend" , "<span> This is inserted html </span>")
// this function remove the node for the html 
document.querySelector(".box").remove()

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);

document.querySelector(".container").classList.add("abhishek");
document.querySelector(".container").classList.remove("blue");
// this is used to toggle a style properties means 1/0
document.querySelector(".container").classList.toggle("blue");