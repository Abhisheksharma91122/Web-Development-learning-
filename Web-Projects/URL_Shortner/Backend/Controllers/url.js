
const UrlModel = require('../Models/url')

function isValidUrl(url) {
    if (typeof url !== "string" || url.trim() === "") return false; // Ensure it's a valid string
    try {
        new URL(url.trim()); // The `URL` constructor validates it
        return true;
    } catch (err) {
        console.log("URL validation error:", err.message); // Debugging
        return false;
    }
}

const generateNewShortURL = async (req, res) => {
    const { nanoid } = await import("nanoid");
    const body = req.body;
    if (!body.url || typeof body.url !== "string") {
        return res.status(400)
            .json({ message: "url is required", success: false });
    }
    console.log(body.url);
    if (!isValidUrl(body.url)) {
        return res.status(400).json({ message: "Invalid URL format", success: false });
    }

    const ShortID = nanoid(8);
    console.log(ShortID)
    try {
        const url = new UrlModel({
            shortURL: ShortID,
            redirectURL: body.url,
            VisitHistory: []
        });

        await url.save();

        return res.json({ message: "URL shortened successfully", id: ShortID, success: true })

    } catch (error) {
        return res.status(200)
            .json({ message: `Internal Server error are : ${error}`, success: false })
    }

}

const handleGetAnalytics = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const result = await UrlModel.findOne(
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
