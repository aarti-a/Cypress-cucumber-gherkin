# Cypress-cucumber-gherkin-Sbux-login

To run this code locally, download the repo and create an cypress.env.json file at the root level

Add  following values under username and password. 

## Cypress.env.json
{
   "username": "",

    "password": "",
    
    "api_key" :""
}

The login feature file will run the login test case for starbucks.com 
# cypress/e2e/login.feature
 
The api feature file will call the Dog open API to get the random image of Dog 
# cypress/e2e/api.feature

You can create your own cypress.env.json file that Cypress will automatically check. Values in here will overwrite conflicting environment variables in your Cypress configuration.
