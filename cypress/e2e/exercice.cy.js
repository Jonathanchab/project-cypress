describe("Premier Exo", () => {
  it("Connexion", () => {
    cy.visit("https://practice.automationtesteracademy.com/");
    cy.get('[data-testid="logo-img-login"]').should("be.visible");
    cy.get('[data-test="username-login"]')
      .type("login_user")
      .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("cypress-geek")
      .should("have.value", "cypress-geek");
    cy.get('[data-test="remember-login"]').check();
    cy.get('[data-test="submit-login"]')
      .should("have.text", "Se Connecter")
      .click();
    cy.url().should("eq", "https://practice.automationtesteracademy.com/home");
    cy.url().should("include", "/home");
    cy.get('.grid-container').should('have.length', 1);
    cy.get(':nth-child(1) > .MuiCardActionArea-root > .MuiCardMedia-root').should('have.length', 1)
    cy.get('.grid-container > div').should('have.length', 8);
    cy.get('.span-name').eq(0).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(1).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(2).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(3).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(4).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(5).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(6).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
    cy.get('.span-name').eq(7).click()
    cy.wait(1500)
    cy.get('[data-test="home-list"]').click()
  });
});
