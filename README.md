# Amazon Photo App
>This service will allow merchants to display high quality photos to allow customers to zoom in on.

## Related Projects

  - https://github.com/the-purple-team/bruce-service
  - https://github.com/the-purple-team/maddie-front-end-capstone
  - https://github.com/the-purple-team/Jose-Questions-And-Answers-Service

## Requirements

- Node >=6.13.0
- MySql

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
### Seeding Database
```sh
npm run seed (This will require the API key from, need to look at seed.js to see where to place API key.)
```
### Setting up Webpack

```sh
npm run react-dev
```

### Run server
```sh
npm run server-dev
```

### CRUD APIs

Create API
------
```
**GET** /product/:id
```
- Get/Fetch record of image/images based on the ID provided.

```
**POST** /product/:id
```
- This will create a new record within the given table. This query will need to save the new record using the information from the request body

```
**PUT** /product/:id
```
- This endpoint will replace an existing record image with a new one. The needed info is the table name and the ID of the item to be replaced

```
**DELETE** /product/:id
```
- This will delete the record, the table name and ID are needed for this action so it can be added to the query


