<h1 align="center">Welcome to Affiliate Marketing API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D11.8.0-blue.svg" />
</p>

> Affiliate Marketing API

## Prerequisites

- node >=11.8.0
- docker 
- docker-compose

## Usage

```sh
docker-compose up
```
This will up mongo db and the application

# Routes

## urls
GET   /urls - retrive all urls that has been shortned\
POST  /url/shorten - short any url as a post verb, need to pass a user_id\
GET   /url/expand/:url - expand any shortned url\

## clicks
GET  /url/:url - contabilize clicks\

## products
GET /products - retrieve all products\
GET /product/:id' - get a product by id\
PUT /product/:id\
POST /product\
DELETE /product\

## Author

👤 **Anderson <andersons.code@gmail.com>**

* Github: [@andersondsl](https://github.com/andersondsl)
