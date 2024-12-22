console.log("this is project on hacker simulator");

let arr = ["Initializing hacking", "Reading your files", "Password files Detected", "Sending all password and personal files to server", "Cleaning up"];

let contain = document.querySelector("div");
console.log(contain.innerHTML)


async function addfun(element) {
    await adddelay();
    contain.innerHTML = element;
}

async function adddelay() {
    return new Promise((resolve, reject) => {
        interval = Math.ceil(1 + Math.random() * 6);
        setInterval(() => {
            resolve();
        }, interval * 1000);
    })
}

async function main() {

    let dot = setInterval(() => {
        if (contain.innerHTML.endsWith("...")) {
            contain.innerHTML = contain.innerHTML.slice(0,-3);
        } else{
            contain.innerHTML += ".";
        }
    }, 500);

    for (const element of arr) {
        // await adddelay();
        console.log(element);
        await addfun(element);
    }
    await adddelay();
    clearInterval(dot);
}

main();