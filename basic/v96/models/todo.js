import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: String,
    Desc: String,
    isDone: Boolean,
    password: Number
})

export const Todo = mongoose.model('Todo', todoSchema);