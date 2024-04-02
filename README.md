# Amazon Scraper API

The **Amazon Scraper API** is a simple Node.js application that provides endpoints for scraping product details, reviews, offers, and search results from Amazon. It utilizes the ScraperAPI service to scrape data from Amazon's website and presents the information in a JSON format through an API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Endpoints](#endpoints)
  


## Introduction

The Amazon Scraper API allows you to retrieve various types of data from Amazon's website, including product details, reviews, offers, and search results. It's built on top of Node.js and Express, and it uses the ScraperAPI service to perform web scraping in a structured manner.

## Features

- Fetch product details by product ID.
- Retrieve product reviews by product ID.
- Get product offers by product ID.
- Search for products using a search query.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/api_amazon.git
```

2. Install dependencies:

```bash
cd amazon-scraper-api
npm install
```

3. Create a `.env` file in the project root and add your ScraperAPI key:

```bash
api_key=your_scraperapi_key_here
```

4. Run the application:

```bash
npm start
```

The server will start on port 3000 by default. You can access the API at `http://localhost:3000.`


## Technologies Used

- Node.js
- Express.js
- `request-promise`
- ScraperAPI


## Usage

The **Amazon Scraper API** can be a fundamental component for building a price comparison website, which can be accessed using tools like `curl`, Postman, or any other HTTP client.

Here's how the Amazon Scraper API can be utilized:

1. **Fetch Product Details**

   When users search for specific products on a price comparison website, the `/search/:searchQuery` API endpoint can be used to retrieve search results directly from Amazon. These results can include crucial product details such as titles, images, and prices, which empowers the website to quickly assess product options without navigating through Amazon's website.

2. **Display Product Reviews**

   For each product listed on the comparison website, a "View Reviews" button can be provided. Upon clicking this button, the `/product/:productId/reviews` API endpoint is employed to fetch product reviews from Amazon, which can then be presented seamlessly on the website, enabling users to make informed decisions by evaluating the experiences of other customers.

3. **Showcase Product Offers**

   To attract users to the comparison website, highlighting product offers and discounts is crucial. The `/product/:productId/offers` API endpoint can be used to gather details about various offers available for a specific product on Amazon. By showcasing these offers alongside product details, users can readily identify money-saving opportunities.

## Endpoints

- `GET /product/:productId`: Get product details by product ID.
- `GET /product/:productId/reviews`: Get product reviews by product ID.
- `GET /product/:productId/offers`: Get product offers by product ID.
- `GET /search/:searchQuery`: Search for products using a search query.


>>>>>>> rsinha-API-testing
