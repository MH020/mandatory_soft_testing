# Introduction



# Prerequisites
* docker compose 
* Node >=20.0.0 
* NPM 

**Optionally:** 
* Bruno API Client
* psql

# Local Setup
## Setup
.env file \
```$ npm install``` \
``` $ docker compose up -d ``` \
``` $ npx drizzle-kit migrate ```

## Application
```$ npm start``` \
**Frontend:** http://localhost:8080/ \
**Backend API:** http://localhost:8080/api/**

# Testing:
```$ npm e2e``` : End to end tests with playwright. HTML report at http://localhost:9323. 

```$npm test```: 

# CI/CD


