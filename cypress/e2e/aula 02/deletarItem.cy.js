import telaInicial from "../../support/pageObjects/telaInicial.page.js"  

describe('Deleter um item da lista de Todo', () => {
    beforeEach(()=>{
        cy.visit('/')
        
        var totalitens = ["Banana" , "Maçã", "Abacaxi"]

        totalitens.forEach(function(texto){
            telaInicial.inputText(texto)
           
        })

       
    })

 it('Deletar o primeiro item da lista', () => {
        telaInicial.deleteitem()
    });

})