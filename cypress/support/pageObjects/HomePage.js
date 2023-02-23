/// <reference types="cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements

class HomePage {

    validarAcessoAPaginaTaskit() {
        cy.contains(homeElements.textoAmazing()).should('exist');
    }

          
}

export default HomePage;