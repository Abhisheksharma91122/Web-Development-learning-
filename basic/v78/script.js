console.log("hello world");

// function p1(){
//     setInterval(() => {
//         let p1 = document.getElementsByTagName("p")[0]
//         p1.innerHTML = "Initializing Hacking...";
//         console.log(p1);
//     }, Math.ceil(1 + Math.random() * 6) * 1000);
// }
// // p1();
// // async function main(){
// //     await p1();
// //     console.log(p1)
// //     console.log("hello");
// // }

let arr = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
]

async function adddelay() {
    return new Promise((resolve, reject) => {
        interval = Math.ceil(1 + Math.random() * 6);
        setInterval(() => {
            resolve();
        }, interval * 1000);
    })
}
async function addfun(element) {
    await adddelay();
    let para = document.getElementById("message");
    para.innerHTML = element;
}
async function main() {

    let dot = setInterval(() => {
        let last = document.getElementById("message");
        console.log(last);
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0,- 3);    
        } else {

            last.innerHTML += ".";
        }
    }, 500);

    for (const element of arr) {
        await addfun(element);
        // console.log(element);
    }
    await adddelay();
    clearInterval(dot);
    
}
main();
// console.log(document.getElementById("message").innerHTML);
