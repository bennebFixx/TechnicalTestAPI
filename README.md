# Technical Test API
Simple API for the technical test.

## Getting Started

The API will keep stock in memory. A Get command will fetch the stock, and a post command will update the stock. It will reload the stock on start.

Clone repo.

### Prerequisites

NodeJS

### Installing

```
Clone repo.
cd TechnicalTestAPI
npm install
```

### Start API service

```
npm start
```

### Get 

```
curl -X GET \
  http://127.0.0.1:8080/stock \
  -H 'content-type: application/json'

```

### Post

```
curl -X POST \
  http://127.0.0.1:8080/stock \
  -H 'content-type: application/json' \
  -d '{
  "Cola":9,
  "Fanta":10,
  "Sprite":10
}'
```

