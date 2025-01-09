import fs from "fs/promises"

let a = await fs.readFile("abhishek2.txt");
let b = await fs.writeFile("abhishek2.txt" , "abhishek is goood boooy")
console.log(a.toString())