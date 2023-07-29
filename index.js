const express = require("express");
const request = require("request-promise");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = process.env.api_key;
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, response) => {
  response.send("Welcome to Amazon Scraper API.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
