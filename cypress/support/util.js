/// <reference types="Cypress" />

const dayjs = require('dayjs');
const chance = require('chance');

export class utility {

  getUserName = () => Cypress.env('username');
  getPassword = () => Cypress.env('password');

  getDays = () => dayjs();
  getChance = () => chance();

  write = (fileName, content) =>
    cy.writeFile(`./cypress/fixtures/output/${fileName}.txt`, content);

}
  