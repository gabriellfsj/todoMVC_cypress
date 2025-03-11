import telaInicial from "../../support/pageObjects/telaInicial.page.js"  

describe('Filtras os itens da lista de todo', () => {
    beforeEach(()=>{
        cy.visit('/')
        
        var totalitens = ["Banana" , "Maçã", "Abacaxi"]

        totalitens.forEach(function(texto){
            telaInicial.inputText(texto)
           
        })

        telaInicial.selectTodo()
       
    })
          
    it('Filtrar itens ativos', () => {
        telaInicial.selectFiltroActive()
    });
    
    it('Filtrar itens completos', () => {
        telaInicial.selectFiltroCompleted()
    });

    it('Filtrar todos os itens', () => {
        telaInicial.selectFiltroAll()
    });
  
})