
const URL = require('../Models/url')

const generateNewShortURL = async (req, res) => {
    const { nanoid } = await import("nanoid");
    const body = req.body;
    if (!body.url || typeof body.url !== "string") {
        return res.status(400)
            .json({ message: "url is required" });
    }

    const ShortID = nanoid(8);
    console.log(ShortID)
    try {
        const url = new URL({
            shortURL: ShortID,
            redirectURL: body.url,
            VisitHistory: []
        });

        await url.save();

        return res.json({ id: ShortID })

    } catch (error) {
        return res.status(200)
            .json({ message: `Internal Server error are : ${error}` })
    }

}

const handleGetAnalytics = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const result = await URL.findOne(
            {
                shortURL: shortId
            }
        )
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        return res.json({ totalClick: result.VisitHistory.length, analytics: result.VisitHistory })
    } catch (error) {
        console.error("Error fetching short URL:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    handleGetAnalytics,
    generateNewShortURL
}
