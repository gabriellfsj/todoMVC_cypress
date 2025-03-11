import telaInicial from "../../support/pageObjects/telaInicial.page.js"  

describe('Concluir itens na lista de todo', () => {
    beforeEach(()=>{
        cy.visit('/')
        
        var totalitens = ["Banana" , "Maçã", "Abacaxi"]

        totalitens.forEach(function(item){
            telaInicial.inputText(item)
           
        })
       
    })
       
   
    it('Concluir um item da lista de todo', () => {
        telaInicial.selectTodo()
    });
    
  
})