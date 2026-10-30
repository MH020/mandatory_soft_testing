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
Test with UI: ```$ npx playwright test --ui``` \
HTML report: ```$ npx playwright show-report``` (http://localhost:9323.)

### Writing Playwright tests
Assertions: https://playwright.dev/docs/writing-tests#assertions \
Before each: https://playwright.dev/docs/writing-tests#using-test-hooks

Generate tests: 
```$ npx playwright codegen [url]``` \
https://playwright.dev/docs/codegen-intro#emulation


## Unit testing

```$npm test```: 

# CI/CD


