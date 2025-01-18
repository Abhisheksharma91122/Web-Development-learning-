import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {type : String , require : true , default : "Abhishek Sharma"},
    Desc: String,
    isDone: Boolean,
    password: Number
})

export const Todo = mongoose.model('Todo', todoSchema);