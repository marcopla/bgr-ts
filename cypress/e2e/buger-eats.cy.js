describe('Cadastro de entregador ', () => {
  beforeEach(() => {
    cy.visit('https://buger-eats.vercel.app/');
  });

  it('verifica se o botao de cadastro esta funcionando', () => {
    cy.contains('a', 'Cadastre-se para fazer entregas').click();
    cy.get('h1').should('contain', 'Cadastre-se');
  });

  it('verificar se botão de retorno para a home funciona.', () => {
    cy.contains('a', 'Cadastre-se para fazer entregas').click();
    cy.get('h1').should('contain', 'Cadastre-se');
  });
});
