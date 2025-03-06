const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Cors = require('cors')
require('dotenv').config();
require('./Models/db')
const AuthRouter = require('./Routes/AuthRouter')

const port = process.env.PORT || 8080

app.get('/ping', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json())
app.use(Cors())

app.use('/auth', AuthRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})