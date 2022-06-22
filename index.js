const express = require("express");
const request = require("request-promise");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = process.env.SCRAPER_API_KEY;
const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Amazon Scraper API.");
});

// GET Product Details
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseURL}&url=https://www.amazon.com/dp/${productId}`
    );

    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
