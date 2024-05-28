describe('API Notes', () => {
    it('Créer compte', () => { 
             cy.request({
              url: 'https://practice.expandtesting.com/notes/api/users/register',
              method: 'POST',
              body: {
                  "name": "Jonathan",
                  "email": "tatan97411@gmail.com",
                  "password": "tatan97460"
              }
          })
          .then(response => {
            expect(response.body.success).to.exist;
            expect(response.body.status).to.exist;
            expect(response.body.message).to.exist;
            expect(response.body.message.toLowerCase()).to.equal('An account already exists with the same email address');
            expect(response.status).to.equal(409);
            })
        })
})