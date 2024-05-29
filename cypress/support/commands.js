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
// -- This is a parent command --
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

Cypress.Commands.add('login', (email, password) => {
    cy.request({
      url: 'https://practice.expandtesting.com/notes/api/users/login',
      method: 'POST',
      body: {
        email,
        password,
      }
    })
    .then(response => {
        expect(response.body.success).to.exist;
        expect(response.body.status).to.exist;
        expect(response.body.message).to.exist;
    })
  });

  import 'cypress-file-upload'
require('cypress-downloadfile/lib/downloadFileCommand')
  

  