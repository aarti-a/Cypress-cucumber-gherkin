import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given ('I want to get a random dog image', () => {
//do nothing

})

When('I make a request to the Dog API', function () {
    cy.getUtil().then((util) => {
        cy.request({
          method: 'GET',
          url: util.dogApiUrl ,
          headers :{
            'x-api-key': util.getApiKey,
            'Content-Type': 'application/json',
          }
        }).then((res) => {
         expect(res.status).eq(200);
        expect(res.body[0].url).to.include('.com')
         cy.wrap(res.body[0].url).as('dogRandomImage');
         expect(res.body.length).eq(1)
        });
      });
    })
    

    When('I should receive a successful response from the Dog API', function () {
        cy.getUtil().then((util) => {
            cy.request({
              method: 'GET',
              url: `${util.dogApiUrl}?format=json&limit=10` ,
              headers :{
                'x-api-key': util.getApiKey,
                'Content-Type': 'application/json',
              }
            }).then((res) => {
              expect(res.status).eq(200);
              expect(res.body[0].url).to.include('.com')
              cy.wrap(res.body[0].url).as('dogRandomImage');
             expect(res.body.length).eq(10)
            });
          });
        })
    
