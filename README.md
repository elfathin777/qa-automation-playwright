# QA Automation – Playwright Take Home Test

This repository contains automated **Web UI** and **API** tests developed as part of a QA Automation take-home technical test.
The solution focuses on **clarity, maintainability, and reliability**, prioritizing clean test design over framework complexity.

---

## 1. Installation & Setup

### Prerequisites

* Node.js (v18 or newer recommended)
* npm

### Install Dependencies

From the project root directory, run:

```bash
npm install
```

### Environment Variables

API tests require an API key for ReqRes.

Create a `.env` file in the project root:

```env
API_KEY=your_reqres_api_key_here
```

> The `.env` file is intentionally excluded from version control for security reasons.

---

## 2. Running Tests

### Run all tests

```bash
npx playwright test
```

### Run UI tests only

```bash
npx playwright test tests/ui
```

### Run API tests only

```bash
npx playwright test tests/api
```

### View HTML Test Report

After test execution, open the HTML report with:

```bash
npx playwright show-report
```

The report includes test results, failure details, screenshots, and traces (when applicable).

---

## 3. Assumptions & Limitations

* **ReqRes is a public mock API**, so response data is not persisted and may be subject to rate limiting.
* API tests include a small delay between requests to reduce the risk of hitting rate limits.
* API assertions are based on **response contracts**, not on stored or persistent data.
* UI tests run against the public **SauceDemo** environment.
* Mobile testing, performance testing, and security testing are out of scope for this assignment.

---

## 4. Improvements with More Time

Given additional time, the following improvements could be implemented:

* Introduce Gherkin (BDD) syntax for better collaboration with non-technical stakeholders
* Apply data-driven testing (DDT) for scenarios with multiple input combinations such as login and form validation
* Add schema validation for API responses
* Introduce reusable test data builders
* Enhance CI execution with additional test separation and reporting
* Extend API logging for improved debugging
* Expand negative and edge-case coverage for both UI and API tests

---

## Notes

* Page Object Model (POM) is used for UI tests to improve readability and maintainability.
* API request logic is separated from test assertions for clearer test intent.
* No hard-coded sleeps are used in UI tests.
* API tests are intentionally throttled to ensure stability when interacting with a public API.

---

### Author

Haruna Elfathin

