import telaInicial from "../../support/pageObjects/telaInicial.page.js"  

describe('Realizar o teste regressivo do site lista To do', () => {
    
    context('Validar a tela inicial',() => {
       
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Validar label do campo de input dos dados da lista ', () => {
            telaInicial.inputvalidate("What needs to be done?")
        });
    })

    context('Validar a adição de itens',() => {
      
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Adicionar mais de um item a lista', () => {
                var totalitens = ["Banana" , "Maçã", "Abacaxi"]
        
                totalitens.forEach(function(item){
                    telaInicial.inputText(item)
                })

                telaInicial.counteritem('3')    

        })
   
       
    })

    context('Validar a conclusão de itens',() => {
       
        beforeEach(()=>{
                cy.visit('/')
                
                var totalitens = ["Banana" , "Maçã", "Abacaxi"]
        
                totalitens.forEach(function(item){
                    telaInicial.inputText(item)
                   
                })
               
        })
               
           
        it('Concluir um item da lista de todo', () => {
            telaInicial.selectTodo()
            telaInicial.counteritem('2')
        });
            
        
    })

    context('Validar a o filtro da aplicação',() => {
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
                telaInicial.validatetodolist(2)
            });
            
            it('Filtrar itens completos', () => {
                telaInicial.selectFiltroCompleted()
                telaInicial.validatetodolist(1)

            });
        
            it('Filtrar todos os itens', () => {
                telaInicial.selectFiltroAll()
                telaInicial.validatetodolist(3)

            });

        
        
    })

    context('Validar a remoção de itens',() => {
        beforeEach(()=>{
            cy.visit('/')
                
            var totalitens = ["Banana" , "Maçã", "Abacaxi"]
        
            totalitens.forEach(function(texto){
                    telaInicial.inputText(texto)
                   
            })
        
               
        })
        
        it('Deletar o primeiro item da lista', () => {
                telaInicial.deleteitem()
                telaInicial.counteritem('2')

        });
        
    })

})