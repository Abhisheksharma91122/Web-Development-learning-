const express = require('express')
const app = express()
const port = 3000

// serving static files in express
app.use(express.static('public'))

// app.get or app.put or app.get or app.delete(path or handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About me')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})
app.get('/Abhishek', (req, res) => {
  res.send('I am Abhishek')
})
app.get('/blog', (req, res) => {
  res.send('I am in blog');
})

// for making lakes of blog we are not able to make like this
// app.get('/blog/intro-to-js', (req, res) => {
//   // logic to fetch intro to js from db
//   res.send('I am in blog and in intro to js');
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   // logic to fetch intro to python from db
//   res.send('I am in blog and in intro to python');
// })


// thus we use express parameter
app.get('/blog/:slug', (req, res) => {
  // logic to fetch intro to js from db
  // For this URL = http://127.0.0.1:3000/blog/wow?mode=dark&region=in
  console.log(req.params)  // will output params: { slug: 'wow' }
  console.log(req.query)  // will output params: { mode: 'dark', region: 'in' }
  res.send(`I am in blog and in ${req.params.slug}`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})