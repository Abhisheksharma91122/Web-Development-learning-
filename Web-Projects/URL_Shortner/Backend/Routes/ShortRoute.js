const express = require("express");
const { generateNewShortURL, handleGetAnalytics } = require("../Controllers/url");
const router = express.Router();

router.post('/generate', generateNewShortURL)

router.get('/analytics/:shortId', handleGetAnalytics)


module.exports = router