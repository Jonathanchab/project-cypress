describe('auth', () => {
  it('connection passe', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.wait(1000)
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('#signin-email').click().type('tata97411@gmail.com')
    cy.get('#signin-password').click().type('Motdepasse974')
    cy.get('[data-qa="signin-submit-button"]').click()
  })

  it('connection echoue', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.wait(1000)
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('#signin-email').click().type('tatan97411@gmail.com')
    cy.get('#signin-password').click().type('Motdepasse974')
    cy.get('[data-qa="signin-submit-button"]').click()
    cy.get('.text-red-700').should("be.visible")
  })
})