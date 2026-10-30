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
## End to end
We use Playwright for end to end tests. Specs are found in /e2e

Test: ```$ npx playwright test``` \
HTML report: ```$ npx playwright show-report``` (http://localhost:9323.)

## Unit testing

```$npm test```: 

# CI/CD


