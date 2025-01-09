const fs = require("fs")
// const fs = require("fs/promises")
// function in file system module
// console.log(fs)


// this approch is writefilesync is synchornous but this is not good because js is asynchoronous
// console.log("start");
// fs.writeFileSync("abhishek.txt" , "Abhishek is good boy");
// console.log("ending")


// this approch is asynchronous 
console.log("start");
fs.writeFile("abhishek2.txt" , "Abhishek is good boy2" , ()=>{
    console.log("done")
    fs.readFile("abhishek2.txt" , (error,data)=>{
        console.log(error,data.toString())
    })
});
console.log("ending")



// how to append data on file 

fs.appendFile("abhishek2.txt" , "abhishek is very good boy" , (e,d)=>{
    console.log(d)
})

