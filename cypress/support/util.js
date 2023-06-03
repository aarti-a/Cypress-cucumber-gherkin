/// <reference types="Cypress" />

const dayjs = require('dayjs');

export class utility {
  getBaseUrl = () => Cypress.env(`BASE_URL_${Cypress.env('ENV')}`);
  getSiteEndPoint = (env) => Cypress.env(`SITE_ENDPOINT_${env}`);
  getIntEndpoint = () => Cypress.env('MAREL_DIGITAL_RG');
  getSiteId = (customerName) =>
    Cypress.env(`SITE_ID_${Cypress.env(customerName)}`);

  getUserName = () => Cypress.env('USER_NAME');
  getPassword = () => Cypress.env('PASSWORD');

  getPAT = () => Cypress.env('ReleasePipelinesAccessPAT');

  getAuthorizationHeaderFromPAT = () => {
    return 'Basic ' + btoa(`:${this.getPAT()}`);
  };

  getDays = () => dayjs();
  getChance = () => chance();

  write = (fileName, content) =>
    cy.writeFile(`./cypress/fixtures/output/${fileName}.txt`, content);

  selectSite(siteName) {
    cy.get('dx-select-box[displayexpr=siteName]')
      .find('.dx-dropdowneditor-icon')
      .should('be.visible')
      .click();
    cy.contains(siteName).should('be.visible').click();
  }

  getSiteToken = () => {
    var arr = [];

    for (var key in localStorage) {
      const obj = localStorage[key];
      if (typeof obj === 'string') arr.push(obj);
    }

    var tokenObj;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].includes('tokenType')) {
        tokenObj = arr[i];
        break;
      }
    }

    return JSON.parse(tokenObj).secret;
  };

  noDuplication(arr) {
    var result = true;
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) result = false;
      }
    }
    return result;
  }

  getSumExpectedUnits(arr) {
    var total = {};
    for (var i in arr) {
      var x = arr[i].expectedCount;
      total[i] = x;
    }
    return total;
  }

  getSumProcessedCount(arr) {
    var total = {};
    for (var i in arr) {
      var x = arr[i].count;
      total[i] = x;
    }
    return total;
  }

  getSum(arr) {
    var sum = 0;
    for (var i in arr) {
      sum = sum + arr[i];
    }
    return sum;
  }

  verifyOverviewChartFlocks(baseFlockArr, chartFlockArr) {
    var count = 0;
    for (var i = 0; i < baseFlockArr.length; i++) {
      const flockItem = chartFlockArr.find(
        (item) => item === baseFlockArr[i].flock
      );
      if (flockItem !== undefined) {
        count += 1;
      }
    }
    return count;
  }

  verifyExpectedFlockRows(baseFlockArr, expectedFlocksArr) {
    var count = 0;
    for (var i = 0; i < baseFlockArr.length; i++) {
      const flockItem = expectedFlocksArr.find(
        (item) => item === baseFlockArr[i].flockId
      );
      if (flockItem !== undefined) {
        count += 1;
      }
    }
    return count;
  }

  objectToArray(src) {
    return Object.values(src);
  }
}
