const { it } = require('mocha');

describe('Pix Cashout',()=>{
    const dataPix = require('../../../../fixtures/dataPix.json');
    beforeEach(()=>{
        cy.visit(dataPix.siteInternetBanking);
    })

    it('Teste Pix cashout', () => {
        //acessa o Pix
        cy.loginIbanking(dataPix.costumerAccount, dataPix.costumerPassword)
        cy.wait(1000);
        cy.contains('div', 'Pix').click();
        cy.contains('button','Entendi').click();
        cy.contains('span','Enviar Pix').click();
        cy.contains('button','Pix com chave').click();
        //seleciona a chave aleatória
        cy.get('span[class="notranslate"]').click({force: true});
        cy.get('[data-value="random"]').click();
        cy.get('[placeholder="Digite a chave"]').type(dataPix.sendPixKey);
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
        //digita valor e finaliza transação
        cy.get('[placeholder="Valor"]').type(dataPix.sendPixValue);
        cy.get('button[type="submit"]').click();
        cy.contains('button','Confirmar').click();
        // comentei a finalização da transação enquanto melhoro as outras etapas.
        //cy.trasactionLogin(dataPix.transactionPassword);
    })
});