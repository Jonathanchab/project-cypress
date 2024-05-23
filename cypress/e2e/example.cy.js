describe('Mon premier test', () => {
    it('Visite du site', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.wait(2000)
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email').type('tatan@email.com')
        .should('have.value', 'tatan@email.com')
    })
  })
  