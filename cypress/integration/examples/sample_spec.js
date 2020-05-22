describe('Form inputs', function () {
    
    it('Checks if I can add text', function(){
        
     cy.visit('index.html')


    cy.url()
    .should('include', 'localhost')

    
    })

    it('Tests that I can submit the form', function(){
       
        cy.get('button.submit')
    })
})




// describe('Multiple toppings', function () {
    
//     it('Checks if I can select multiple toppings', function(){
        
     
//     })
// })


