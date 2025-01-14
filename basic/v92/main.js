const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');


// this is middleware for checking user log in or not
// app.use((req, res, next) => {
//     console.log('LOGGED');
//     next();
// });


app.get('/', (req, res) => {
    let bn = "Abhishek"
    let search = "Search now"
    let arr = [54 , 45 , 23]
    res.render("index", { brandname: bn, search: search , arr : arr})
})

app.get('/blog/:slug', (req, res) => {
    let brandname = req.params.slug;
    let search = "Search now"
    let arr = ["abhishek" , "neha"]
    res.render("index" , {brandname , search , arr})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})