
describe('Testa login', ()=>{
    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com/')
    })
    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123');
        cy.contains('a','(Logout)').should('be.visible');
    });
    it('fazer login de usuario invalido', () => {
        cy.get('input[formcontrolname="userName"]').type('jacqueline');
        cy.get(' input[formcontrolname="password"').type('1234');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})