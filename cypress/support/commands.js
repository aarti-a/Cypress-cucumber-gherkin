// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --/// <reference types="Cypress" />

import { utility } from './util.js';
const util = new utility();

Cypress.Commands.add('getUtil', function () {
  return util;
});

Cypress.Commands.add('login', function () {
 cy.visit(util.getBaseUrl())


 cy.origin('https://mareldigitalintb2c.b2clogin.com', {args: {userName: util.getUserName(), pw: util.getPassword()}}, ({userName, pw}) => {
     cy.wait(2000);

  cy.location().then(() => {
    cy.get('#email.textInput').type(userName, { log: false });
    cy.get('#continue').click();
    cy.wait(2000);
    cy.get('#signInName').type(userName, { log: false });
    cy.get('#password').type(pw)
    cy.get('#next').click();
  
  });
});
})

Cypress.Commands.add('navigate_modules', function (module) {
  cy.get('.menu-button', { timeout: 5000 }).click();
  cy.wait(2000);
  if (module === 'model_optimization') {
    cy.get('[data-item-id="6"] > .dx-item > .router-link').click();
  }
});

// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })