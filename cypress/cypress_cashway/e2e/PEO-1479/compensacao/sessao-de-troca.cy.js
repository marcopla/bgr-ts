describe('Teste da sessão de troca', ()=>{
    const dataChecks = require('../../../fixtures/PEO-1479.json')
    beforeEach(()=>{
        cy.visit('/');
        cy.loginEgerente(dataChecks.user, dataChecks.password);

    })
    it('Testa Importação de arquivo', ()=>{
        cy.accessCheques();
        cy.get('.btn-primary').click();
        cy.get('#flash-notice').should('contain', 'Busca e Importação solicitada com sucesso.');
    });
    it('Testa botão "Ver Arquivo Importado"',()=>{
        cy.accessCheques();
        cy.get(':nth-child(1) > :nth-child(3) > [title="Ver arquivo importado"]').click();
        //Verifica se o arquivo foi importado.
        cy.get('.box-header').should('contain','Cheques: Arquivo importado');
        cy.get('pre').should('not.be.empty');
    });
    it('Testa botão "Ver Movimentações"',()=>{
        cy.accessCheques();
        cy.get(':nth-child(1) > :nth-child(3) > [title="Ver movimentações"]').click();

    })

});