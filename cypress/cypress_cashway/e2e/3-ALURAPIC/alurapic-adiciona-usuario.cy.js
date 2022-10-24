describe('Adiciona user', ()=>{
    beforeEach(()=>{
       cy.visit('https://alura-fotos.herokuapp.com/');
    })
    const usuarios = require('../../fixtures/usuarios.json');

    usuarios.forEach(usuario => {
        it(`Registra novo usuário ${usuario.fullName}`,()=>{
            cy.contains('a', 'Register now').click();
            cy.get('input[formcontrolname="email"').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName)
            cy.get('input[formcontrolname="userName"]').type(usuario.userName)
            cy.get('input[formcontrolname="password"]').type(usuario.password)
            cy.contains('button', 'Register').click();
        })
    })
})