const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Employee = require('./model/employee.js')
async function connt() {
  const connection = await mongoose.connect('mongodb://127.0.0.1:27017/company')
}
connt()

function ram(arr) {
  let rno = Math.floor((Math.random() * (arr.length)))
  return arr[rno];
}
const port = 3000
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/generate', async (req, res) =>{
  await Employee.deleteMany({})
  let arrname = ["Abhishek", "Aditya", "Neha", "Soham", "vinaya"]
  console.log(arrname.length)
  let arrcity = ["Nashik", "Mumbai", "Pune", "Aurangabadh", "chinneai"]
  let arrlang = ["javascript", "python", "c++", "java", "html"]
  for (let i = 0; i < 10; i++) {
    let employee = await Employee.create({
      name: ram(arrname),
      salary: Math.floor(Math.random() * 22000),
      language: ram(arrlang),
      city: ram(arrcity),
      isManager: Math.random() > 0.5 ? false : true
    })
    await employee.save()
  }

  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})