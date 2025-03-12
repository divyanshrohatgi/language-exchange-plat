const axios = require("axios");

const translateText = async (req, res) => {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
        return res.status(400).json({ message: "Text and target language are required" });
    }

    try {
        const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2`,
            {},
            {
                params: {
                    q: text,
                    target: targetLanguage,
                    key: process.env.GOOGLE_TRANSLATE_API_KEY
                }
            }
        );

        res.json({ translatedText: response.data.data.translations[0].translatedText });
    } catch (error) {
        res.status(500).json({ message: "Translation failed" });
    }
};

module.exports = { translateText };
