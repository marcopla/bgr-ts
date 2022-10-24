

describe('Testando gerencial',()=>{
    const dataTest = require('../../../fixtures/dataTest.json');
    beforeEach(()=>{
        cy.visit(dataTest.siteEgerente);
        cy.login(dataTest.user, dataTest.password);
    })

    
    it('Password change',()=>{
        //E-gerente
        cy.contains('a', 'Internet Banking').click();
        cy.contains('a', 'Clientes').click();
        cy.contains('a', 'Internet Banking').click();
        cy.get('input[id="search"]').type(dataTest.costumerAccount).type('{enter}');
        cy.get('a[title="Redefinir senha"]').click();

        cy.get('input[id="password"]').then(($input) => {
            
            const tempPassword = Array.from($input.val());
            cy.contains('button', 'Redefinir senha').click();


            //IB
            cy.visit(dataTest.siteInternetBanking);
            
            cy.get('input[id=":r3:"]').type(dataTest.costumerAccount);
            cy.get('input[id=":r5:"]').click();
            tempPassword.forEach((digit) => {
                cy.contains('button', `${digit}`).click();
            });
            cy.get('button[type="submit"]').click();
            //Ocorreu um problema ao trocar dados com o servidor
        });
    });
});