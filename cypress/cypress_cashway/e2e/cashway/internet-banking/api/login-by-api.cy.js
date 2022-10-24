describe('Testes de API', () => {
    it('Testando api de login', () => {
       cy.request({
        method: 'POST',
        url: 'https://cwbank.ib.cashway.io/api/v3/auth/sign_in',
        body: {
            account: ,
            password: ,
            holder: 1
        }
       }).then(response => {
        expect(response.status).to.equal(200);
        cy.request({
            method: ''
        })
       });
    });
});