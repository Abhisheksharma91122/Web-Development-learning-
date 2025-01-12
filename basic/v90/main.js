const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const blog = require('./routes/blog')


// this is express built in middleware
// app.use(express.static("public"))

app.use('/blog', blog)

// this is middleware 1

app.use((req, res, next) => {
    console.log(req.headers)
    req.abhi = "I am abhishek"
    fs.appendFileSync("logged.txt" , `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("hacked by middleware 1")
    next()
})

// this is middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.abhi = "I am abhishek 2"
    next()
})


app.get('/', (req, res) => {
    res.send('This is get request')
})
app.get('/about', (req, res) => {
    res.send('this is about page' + req.abhi)
})
app.get('/contact', (req, res) => {
    res.send('this is contact page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})