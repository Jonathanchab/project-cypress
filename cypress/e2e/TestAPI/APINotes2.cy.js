describe('API Notes', () => {
    let user = require('../../fixtures/apiNotesConnection.json');
    
    it('Connection and Note Operations', () => {
      cy.login(user.email, user.password)
  
      cy.request({
        url: 'https://practice.expandtesting.com/notes/api/notes',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': user['x-auth-token']},
   
        body: {
            "title": "note1",
            "description": "note1 effectué",
            "category": "Home",
            "userId": "1"
        }
    })
    .then(response => {
        expect(response.body.success).to.exist;
        expect(response.body.status).to.exist;
        expect(response.body.message).to.exist;
        expect(response.body).to.have.property('message', 'Note successfully created');
        expect(response.body.success).to.be.a('boolean').and.to.equal(true);
        expect(response.status).to.equal(200)
  })

  cy.request({
    url: 'https://practice.expandtesting.com/notes/api/notes',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': '33df3381161b43249b40c753351812637b86daa0ecfe4082b270fafe2a2604ae'} ,

    body: {
        "title": "note2",
        "description": "note2 effectué",
        "category": "Home",
        "userId": "2"
    }
})
.then(response => {
    expect(response.body.success).to.exist;
    expect(response.body.status).to.exist;
    expect(response.body.message).to.exist;
    expect(response.body).to.have.property('message', 'Note successfully created');
    expect(response.body.success).to.be.a('boolean').and.to.equal(true);
    expect(response.status).to.equal(200)
})
cy.request({
    url: 'https://practice.expandtesting.com/notes/api/notes',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': '33df3381161b43249b40c753351812637b86daa0ecfe4082b270fafe2a2604ae'},
    })
    .then(response => {
            expect(response.body.success).to.exist;
            expect(response.body.status).to.exist;
            expect(response.body.message).to.exist;
            expect(response.body).to.have.property('message', 'Notes successfully retrieved');
            expect(response.body.success).to.be.a('boolean').and.to.equal(true);
            expect(response.status).to.equal(200)
    
})
    })
    
})

  