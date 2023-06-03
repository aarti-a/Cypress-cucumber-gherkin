/// <reference types="Cypress" />

const dayjs = require('dayjs');

export class utility {

  getUserName = () => Cypress.env('USER_NAME');
  getPassword = () => Cypress.env('PASSWORD');

  getDays = () => dayjs();
  getChance = () => chance();

  write = (fileName, content) =>
    cy.writeFile(`./cypress/fixtures/output/${fileName}.txt`, content);

}
  