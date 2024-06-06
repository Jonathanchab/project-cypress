describe('Password Reset Test with MailSlurp', function() {
    // Utiliser le plugin cypress-mailslurp pour créer une adresse email avant le test
    before(function() {
      return cy
        .mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
          // Sauvegarder l'ID et l'adresse email de la boîte de réception
          cy.wrap(inbox.id).as('inboxId');
          cy.wrap(inbox.emailAddress).as('emailAddress');
        });
    });

    it('Passe', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"]').click();
        cy.get('#firstName').type('moi');
        cy.get('#lastName').type('CHABOT');
        cy.get('@emailAddress').then(emailAddress => {
            cy.get('#signup-email').type(emailAddress).trigger('change');
          });
        cy.get('#signup-password').type('Azerty974');
        cy.get('[data-qa="signup-submit-button"]').click();
        // cy.get('.isolate.mt-7 > .items-baseline').should("be.visible")
       
      })
  
    it('connection passe', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(1000)
        cy.get('[data-qa="accept-cta"]').click()
        // cy.get('#signin-email').click().type(inbox.emailAddress)
        // cy.get('#signin-password').click().type('Motdepasse974')
        // cy.get('[data-qa="signin-submit-button"]').click()
        cy.get('form > :nth-child(3) > .cK_xUFG6').click()
        cy.get('@emailAddress').then(emailAddress => {
        cy.get('#email').click().type(emailAddress)
        })
        cy.get('[data-test="password-reset-submit-button"]').click()
        cy.wait(3000)
        cy.contains('Un lien pour réinitialiser votre mot de passe a été envoyé').should('be.visible');
    });
  
    it.skip('02 - can initiate password reset', function() {
      // Cliquer sur le lien "Mot de passe oublié"
      cy.get('a').contains('Mot de passe oublié').click();
      // Saisir l'adresse e-mail pour la réinitialisation du mot de passe
      cy.get('input[name="email"]').type(this.emailAddress).trigger('change');
      // Soumettre le formulaire de réinitialisation
      cy.get('button[type="submit"]').contains('Réinitialiser le mot de passe').click();
      // Vérifier qu'un message de confirmation est affiché
      cy.contains('Un email de réinitialisation a été envoyé à votre adresse email').should('be.visible');
    });
  
    it.skip('03 - can receive password reset email', function() {
      // Utiliser MailSlurp pour attendre le dernier email
      cy.mailslurp()
        .then(mailslurp => mailslurp.waitForLatestEmail(this.inboxId, 30000, true))
        // Extraire le lien de réinitialisation du mot de passe du corps de l'email
        .then(email => {
          const resetLink = email.body.match(/href="([^"]*)/)[1];
          // Visiter le lien de réinitialisation du mot de passe
          cy.visit(resetLink);
        });
    });
  
    it.skip('04 - can reset the password', function() {
      // Saisir un nouveau mot de passe
      cy.get('input[name="new_password"]').type('NouveauMotDePasse123!').trigger('change');
      cy.get('input[name="confirm_password"]').type('NouveauMotDePasse123!').trigger('change');
      // Soumettre le formulaire de réinitialisation
      cy.get('button[type="submit"]').contains('Réinitialiser le mot de passe').click();
      // Vérifier que le mot de passe a été réinitialisé avec succès
      cy.contains('Votre mot de passe a été réinitialisé avec succès').should('be.visible');
    });
  
    it.skip('05 - can log in with the new password', function() {
      // Aller à la page de connexion
      cy.visit('http://preprod.backmarket.fr/login');
      // Utiliser l'adresse e-mail et le nouveau mot de passe pour se connecter
      cy.get('input[name="email"]').type(this.emailAddress).trigger('change');
      cy.get('input[name="password"]').type('NouveauMotDePasse123!').trigger('change');
      // Cliquer sur le bouton de connexion
      cy.get('button[type="submit"]').contains('Se connecter').click();
      // Vérifier que l'utilisateur est connecté avec succès
      cy.contains('Mon compte').should('be.visible');
    });
  });
  