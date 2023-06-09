/// <reference types="Cypress" />

const dayjs = require('dayjs');
const chance = require('chance');

export class utility {

  getUserName = () => Cypress.env('username');
  getPassword = () => Cypress.env('password');
  getApiKey = () => Cypress.env('api_key');
  
  'dogApiUrl' = 'https://api.thedogapi.com/v1/images/search'


  getDays = () => dayjs();
  getChance = () => chance();

}
  