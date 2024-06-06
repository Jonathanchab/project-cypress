describe('Inscription', () => {
  beforeEach(()=>{
    cy.log('avant test')
    cy.visit('https://preprod.backmarket.fr/register')

  })
  it.skip('echoue', () => {
    cy.get('[data-qa="accept-cta"]').click();
    cy.get('#lastName').type('CHABOT');
    cy.get('#signup-email').type('tata97411@gmail.com');
    cy.get('#signup-password').type('Azerty974');
    cy.get('[data-qa="signup-submit-button"]').click();
    cy.get('[data-test="signup-component"] > form > :nth-child(1) > .flex').should("be.visible")
  
  })

  it('Passe', () => {
    cy.get('[data-qa="accept-cta"]').click();
    cy.get('#firstName').type('moi');
    cy.get('#lastName').type('CHABOT');
    cy.get('#signup-email').type('tata97411@gmail.com');
    cy.get('#signup-password').type('Azerty974');
    cy.get('[data-qa="signup-submit-button"]').click();
    cy.get('.isolate.mt-7 > .items-baseline').should("be.visible")
   
  })
})