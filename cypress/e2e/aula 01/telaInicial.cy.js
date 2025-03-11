/**
describe é a feature que você vai testar 
it é o caso de teste
*/
import telaInicial from "../../support/pageObjects/telaInicial.page.js"  

describe('acessar a página do todo MVC', () => {
  it('passes', () => {
    cy.visit('https://todomvc.com/examples/javascript-es5/dist/')
    telaInicial.inputText()
  })
})