<h1 >Affiliate Marketing API</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D11.8.0-blue.svg" />
</p>

## Description
  This project aims to manage affiliate marketing links.\
  You can register a new shop, create a campaing to products with a personalized discount.\
  Influencers will navigate trough a list of products, and generate a unique link.\
  When this link is clicked we track some info, and redirect to the shop page.

## Project Archteture
  This project is composed by multilayer folder structure, inspired by DDD and Clean Archteture.

    `Each domain of business has an controller, service, repository and model.`

  - The application layer on ./src/api\
    This layer is responsible to mediate between the rest api and your business domain.
  - The Domain layer on ./src/domain\
    This layer is reponsible to all the business rules, and interfacing with DB trough a repository pattern.
  - The Infra Layer on ./src/infra\
    This layer contains configurations for the application and the database.

  This structure provides some design patterns to be easily modified when needed.

## Pre-Requisites
- `node >=11.8.0`
- `docker`
- `docker-compose`

## Usage

```sh
docker-compose up
```
This will up mongo db and the application

## Routes

  ### Shops
  - `GET    localhost:7003/shops`
  - `GET    localhost:7003/shop/:id`
  - `PUT    localhost:7003/shop/:id`
  - `POST   localhost:7003/shop`
  - `DELETE localhost:7003/shops`

  ### Products
  - `GET    localhost:7003/products`
  - `GET    localhost:7003/product/:id`
  - `PUT    localhost:7003/product/:id`
  - `POST   localhost:7003/product`
  - `DELETE localhost:7003/producs`

  ### Campaings
  - `GET    localhost:7003/campaings`
  - `GET    localhost:7003/campaing/:id`
  - `PUT    localhost:7003/campaings/:id`
  - `POST   localhost:7003/campaing`
  - `DELETE localhost:7003/campaing`

  ### Short/Expand Urls
  - `GET   localhost:7003/urls`
  - `POST  localhost:7003/url/shorten`
  - `GET   localhost:7003/url/expand/:url`

  ### Tracking clicks 
  - `GET  localhost:7003/url/:url`

### Author 
**Anderson <andersons.code@gmail.com>**

* Github: [@andersondsl](https://github.com/andersondsl)
