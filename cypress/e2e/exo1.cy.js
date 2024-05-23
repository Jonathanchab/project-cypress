describe("Premier Exo", () => {
  beforeEach(() => {
    cy.log("Avant chaque");
    cy.visit("https://practice.automationtesteracademy.com/");
  });
  it("mdp et utilisateur manquant", () => {
    
    cy.get('[data-testid="logo-img-login"]').should("be.visible");
    cy.get('[data-test="submit-login"]')
    .should("have.text", "Se Connecter")
    .click();
    cy.get('.error-message').should("have.text", "Veuillez renseigner votre nom d'utilisateur")
  });

  it("mdp manquant", () => {
    
    cy.get('[data-testid="logo-img-login"]').should("be.visible");
    cy.get('[data-test="username-login"]')
    .type("login_user")
    .should("have.value", "login_user");
    cy.get('[data-test="submit-login"]')
    .should("have.text", "Se Connecter")
    .click();
    cy.get('.error-message').should("have.text", "Veuillez renseigner votre mot de passe") 
  });

  it("mdp faux", () => {
    
    cy.get('[data-testid="logo-img-login"]').should("be.visible");
    cy.get('[data-test="username-login"]')
    .type("login_user")
    .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("azerty")
      .should("have.value", "azerty");
    cy.get('[data-test="submit-login"]')
    .should("have.text", "Se Connecter")
    .click();
    cy.get('.error-message').should("have.text", "Veuillez vérifier votre nom d'utilisateur ou mot de passe") 
  });
});
