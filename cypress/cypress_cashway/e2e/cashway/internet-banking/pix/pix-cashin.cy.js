describe('Teste Pix Cashout',() => {
    const dataPix = require('../../../../fixtures/dataPix.json');
    beforeEach(()=>{
        cy.visit(dataPix.siteInternetBanking);
    })
    it.only('Gerar QRcode',()=>{
        //Acessa o Pix no IB
        cy.loginIbanking(dataPix.costumerAccount, dataPix.costumerPassword)
        cy.contains('.MuiTypography-root', 'Pix').click();
        cy.contains('button','Entendi').click();
        cy.contains('span','Cobrar via Pix').click();
        cy.get('input[name="paymentValue"]').type(dataPix.sendPixValue);
        cy.get('input[name="description"]').type(dataPix.pixDescription);
        cy.get('button[type="submit"').click();
        cy.wait(6000);
        cy.get('.css-1p1m4ay > .MuiTypography-root').then(($h5) => {
            expect($h5).to.have.text('QR Code e Link criado com sucesso!');
        })
    })
    it('Gerar QRcode sem valor',()=>{
        //Acessa o Pix no IB
        cy.loginIbanking(dataPix.costumerAccount, dataPix.costumerPassword)
        cy.contains('.MuiTypography-root', 'Pix').click();
        cy.contains('button','Entendi').click();
        cy.contains('span','Cobrar via Pix').click();
        cy.get('input[name="paymentValue"]').type('0');
        cy.get('input[name="description"]').type(dataPix.pixDescription);
        cy.get('button[type="submit"').click();
        cy.wait(6000);
        cy.get('.css-1p1m4ay > .MuiTypography-root').then(($h5) => {
            expect($h5).to.have.text('QR Code e Link criado com sucesso!');
        })
    });
})