# Basic Cypress Test Automation Framework

This project is a basic test automation framework build with JavaScript that uses Cypress to implement UI tests for an example application

## Initial Task

`src` folder contains an app that is a counter that should only display positive numbers. It should increment and decrement when pressed accordingly.


- choose a testing e2e framework (recommended cypress)
- apply e2e setup to run a single test:
   - When pressing "increment", verify that counter shows 1
- Create a Github Action pipeline, that runs the test on every PR as a "verify" step
- extend the tests:
  - create a test plan (can be a markdown file in the repo under i.e. `test-plan/` ), that covers the edge cases
  - implement some tests of the test-plan
 
All code should be on Github, the GH runner should have had at least one seccessful run.  


## Steps to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm run app:run
   ```
3. Run the tests:
    ```bash
    npm run cypress:run 
    ```
4. View the test report:
    ```bash
    npm run allure:serve
    ```
   
## GitHub Actions

GitHub Actions workflow is configured to run Cypress tests on each push.
Allure report is available by URL `https://ivanostanin.github.io/web-automation-cypress/<branch name>/allure/index.html`.
I.e. `https://ivanostanin.github.io/web-automation-cypress/main/allure/index.html`.