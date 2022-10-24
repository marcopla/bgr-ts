describe('Teste de login de todos clientes', () => {
  const dataConta = require('../../../../fixtures/dataConta.json')
  beforeEach(() => {
      
  });

  it('', () => {
    dataConta.clients.forEach((client) => {
      cy.request({
        method: 'GET',
        url: dataConta.clients[client] 
      }).then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).is.not.empty;
        expect(res.body[0]).to.have.property('description');
        expect(res.body[0].description).to.be.equal('Farol iluminado');
      })
    })

    it('', () => {
      dataConta.clients.forEach((client) => {
        
    })


  })
});