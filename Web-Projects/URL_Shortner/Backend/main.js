const express = require('express')
const app = express()
const port = 8001
const cors = require("cors")
const ShortRoute = require('./Routes/ShortRoute')
require('./Models/connect')
const URL = require('./Models/url');

app.get('/', (req, res) => {
  res.send('Welcome to URL Shortener!')
})

app.use(cors())
app.use(express.json())

app.get('/:shortId', async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
      shortURL: shortId
    }, {
      $push: {
        VisitHistory: {
          timestamp: Date.now()
        }
      }
    })

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found", success: false });
    }

    console.log(entry.redirectURL);
    res.redirect(entry.redirectURL);

  } catch (error) {
    console.error("Error fetching short URL:", error);
    res.status(500).json({ error: "Internal Server Error", success: false });
  }
})

app.use('/short', ShortRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})