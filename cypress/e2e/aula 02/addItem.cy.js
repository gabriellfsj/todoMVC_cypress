import telaInicial from "../../support/pageObjects/telaInicial.page.js"  

describe('Adicionar itens na lista de Todo', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("Dado 1 ")
        
    });

    it('Adicionar mais de um item a lista', () => {
        var totalitens = ["Banana" , "Maçã", "Abacaxi"]

        totalitens.forEach(function(item){
            telaInicial.inputText(item)
        })

    });
  
})