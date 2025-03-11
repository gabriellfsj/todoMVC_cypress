const ELEMENTS = require('../elements/telaInicial.elements').ELEMENTS

class telaInicial {
    inputText(texto){
        cy.get(ELEMENTS.inputTodo)
        .type(texto)
        .type('{enter}')
    }
    selectTodo(){
        cy.get(ELEMENTS.selector)
        .first()
        .click()    
    }
    selectFiltroActive(){
        cy.get(ELEMENTS.filtroActive)
        .click()    
    }

    selectFiltroCompleted(){
        cy.get(ELEMENTS.filtroCompleted)
        .click()    
    }

    selectFiltroAll(){
        cy.get(ELEMENTS.filtroAll)
        .click()    
    }

    deleteitem(){
        cy.get(ELEMENTS.itemBox)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    inputvalidate(texto){
        cy.get(ELEMENTS.inputTodo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    counteritem(quant){
        cy.get(ELEMENTS.counterItens)
        .find('strong')
        .should('have.text',quant)

    }

    validatetodolist(count){
        cy.get(ELEMENTS.todolist)
        .find('li')
        .should('have.length', count)
                
    }


}

export default new telaInicial();