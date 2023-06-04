

import { utility } from './util.js';
const util = new utility();

Cypress.Commands.add('getUtil', function () {
  return util;
});


Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.location().then(() => {
    cy.contains('Sign in',{timeout:5000}).click()
    cy.title().should('eq', 'Account sign in: Starbucks Coffee Company')
    cy.get('#username').type(util.getUserName(),  {timeout:5000,force: true, log: false });
    cy.get('#password').type(util.getPassword(), {timeout:5000, log: false }); 
    cy.get('[data-e2e="signInButton"]',{timeout:5000}).click()
  });
});