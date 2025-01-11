const express = require('express')
const blog = require('./routes/blog')


const app = express()
const port = 3000;

app.use('/blog', blog)
app.use(express.static("public"))


// the below statement is chaining of request
app.get('/', (req, res) => {
    console.log("this is get request")
    res.send('Hello World! get1')
})

app.post('/', (req, res) => {
    console.log("this is post request")
    res.send('Hello World1! post')
}).put('/', (req, res) => {
    console.log("this is put request")
    res.send('Hello World1! put')
})

app.get('/index', (req, res) => {
    console.log("this is index")
    res.sendFile('templates/index.html' , {root : __dirname})
})

app.get('/api', (req, res) => {
    res.json({a:1, b:2 , c:3, name : ["abhishek" , "Aditya"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})