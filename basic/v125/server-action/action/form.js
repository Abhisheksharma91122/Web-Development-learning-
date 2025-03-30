"use server"
import fs from "fs/promises"

export const handleSubmit = async(e)=> {
    console.log(e.get("name"), e.get("add"))
    fs.writeFile("Abhi.txt", `name is ${e.get("name")} and address is ${e.get("add")}`);
}