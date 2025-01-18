import express from "express"
import mongoose from "mongoose"
import { Todo } from "./models/todo.js"

async function serverconnetion() {
    let a = await mongoose.connect("mongodb://127.0.0.1:27017/todo")
    return a;
}

serverconnetion().then(console.log("this is working"))

const app = express()
const port = 3000

app.get('/', async(req, res) => {
    let todo =new Todo({
        title: "Abhishek", Desc: "hey this is my first todo", isDone: false , password : "123"})
    await todo.save()
    res.send('Hello World!')
})

app.get('/about', async (req , res) => {
    let todo = await Todo.findOne({})
    res.json({title : todo.title , description : todo.Desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})