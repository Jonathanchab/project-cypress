describe('API Reqres', () => {
  it('prtocole HTTP', () => {
   cy.request('https://reqres.in/api/users?page=2')
   .its('status')
   .should('equal', 200)

   cy.request({
    url: 'https://reqres.in/api/users',
    method: 'POST',
    body: {
        "name": "Bob",
        "job": "QA"
    }
})
    .its('body.name')
    .should('eql', 'Bob')

   cy.request({
    url: 'https://reqres.in/api/users/2',
    method: 'PUT',
    body: {
        "name": "Jonathan",
        "job": "Dev"
    }
  })
  .then(response => {
   
    expect(response.body.job).to.exist;
    expect(response.body.job.toLowerCase()).to.equal('dev');
    expect(response.body.name).to.exist;
 
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      
    }).then((response) => {
      expect(response.status).to.equal(204);
      
    });
  })
})
})

