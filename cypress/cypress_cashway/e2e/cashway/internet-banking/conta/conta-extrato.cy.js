describe('Teste de extratos da conta',()=>{
    const dataConta = require('../../../../fixtures/dataConta.json');
    beforeEach((()=>{
      cy.visit(dataConta.siteInternetBanking)
      cy.loginIbanking(dataConta.costumerAccount, dataConta.costumerPassword)

    }));
    it('Botão Extrato(impressora)',() => {
      cy.contains('.MuiButtonBase-root', 'Conta').click();
      cy.contains('.MuiButtonBase-root', 'Extrato').click();
      cy.get('.css-1553xo6 > .MuiIconButton-edgeEnd').click();
      cy.get('.css-1w8lvc3 > .MuiTypography-root').then(($h5) => {
        expect($h5).to.have.text('Sucesso');
      });
    });
    it.only('Botão de extrato do item da tabela', () => {
      cy.contains('.MuiButtonBase-root', 'Conta').click();
      cy.contains('.MuiButtonBase-root', 'Extrato').click();
      cy.get('button[data-testid="receipt-print-0"]').click();
      cy.get('.css-1w8lvc3 > .MuiTypography-root').then(($h5) => {
        expect($h5).to.have.text('Sucesso');
      });
    });
//verificar se a data do comprovante está correta.
})