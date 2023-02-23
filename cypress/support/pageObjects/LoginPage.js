/// <reference types="cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    validarPaginaLogin() {
        cy.contains(loginElements.registration()).should('exist');
    }

    clicarSignTaskit () {
        cy.get(loginElements.signIn()).click();
    }

    clicarSignLogin () {
        cy.get(loginElements.signInLogin()).click();
    }

    digitarUsuario (usuario) {
        cy.get(loginElements.login()).type(usuario, {log: false});
    }

    digitarPassword (password) {
        cy.get(loginElements.password()).type(password, {log: false});
    }

    validarExibicaoDoToast(mensagem) {
        cy.get(loginElements.toast()).should('have.text', mensagem);
    }

    

    


  
}

export default LoginPage;