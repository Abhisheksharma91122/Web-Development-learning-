const express = require('express')
const Employee = require('./modules/employee.js')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/company');
const app = express()
const port = 3000
app.set('view engine', 'ejs');

let funran = (arr)=> {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/generate', async (req, res) => {
    
    let arrname = ["Abhishek" , "Neha" , "Aditya" , "Mohan" , "Sohan"]
    let arrcity = ["Nashik" , "Mumbai" , "Pune" , "Vanarashi" , "Bihar"]
    let arrLang = ["Java" , "C++" , "Javascript" , "Python"]
    await Employee.deleteMany({})
    for (let i = 0; i < 10; i++) {
        let employee = await Employee.create({
            name: funran(arrname),
            salary: Math.floor(Math.random() * 25500),
            language: funran(arrLang),
            city: funran(arrcity),
            isManager: Math.random() > 0.5 ? true : false
        })
        await employee.save();
    }
    res.render('index')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})