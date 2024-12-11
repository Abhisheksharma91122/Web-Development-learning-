console.log("hello world");

let a = document.body.childNodes;
console.log(a);

console.log(document.body.children);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].firstChild);
console.log(document.body.childNodes[1].lastChild);
console.log(document.body.childNodes[1].firstElementChild);
console.log(document.body.childNodes[1].lastElementChild);

console.log(document.body.firstElementChild.childNodes[1].nextSibling);
console.log(document.body.firstElementChild.childNodes[1].nextElementSibling);
console.log(document.body.firstElementChild.childNodes[5].previousSibling);
console.log(document.body.firstElementChild.childNodes[5].previousElementSibling);

document.body.firstElementChild.lastElementChild.style.color = "red";
document.body.firstElementChild.lastElementChild.style.backgroundColor = "green";

console.log(document.body.firstElementChild.lastElementChild.parentElement);
console.log(document.body.firstElementChild.children);

console.log(document.body.children[1].rows);
console.log(document.body.children[1].tHead);