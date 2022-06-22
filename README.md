# Amazon Scraper API

Generate Amazon Product Details, Reviews and Offers with our easy-to-use API.

## 📃 API Reference

#### 📌 Get Product Details

```
  GET /products/{productId}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### 📌 Get Product Reviews

```
  GET /products/{productId}/reviews
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### 📌 Get Product Offers

```
  GET /products/{productId}/offers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### 📌 Get Search Results

```
  GET /search/{searchQuery}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## 👇 Environment Variables

To run this project locally (in development), you will need to add the following environment variables to your .env file

`SCRAPER_API_KEY=XXXXXXXXXXXXXXXXXXX`

## 🚀 Run Locally

1. Clone this repository to your local computer.
2. Open terminal in root directory.
3. Type and Run `yarn install`.
4. Once packages are installed, type and run `yarn start`
5. Now app is fully configured and you can start using this app 👍

## 🙌🏼 Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## :copyright: License

[MIT](https://github.com/Technical-Shubham-tech/amazon-scraper-api/blob/main/LICENSE.md)

## ⭐ Give A Star

You can also give this repository a star to show more people and they can use this repository.
