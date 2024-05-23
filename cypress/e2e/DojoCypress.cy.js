describe('testdojocypress', () => {
    it('creationcompte', function(){
        cy.viewport(1200, 800)
        cy.visit('https://stg-fr.rajapack.xyz/')
       
        cy.contains('Se connecter').click()
        cy.get('#redirectCreateAccount').click()
        cy.get('#IdentifiersLogin').type('dojogrp1@gmail.com')

    })
})