describe('Form inputs', function () {


    it('Checks if I can add text', function(){
        
     cy.visit('index.html')

        cy.get('input[name="name"]')
        .type('Lady Gaga')
    })

    

    //second test
    it('Tests that I can submit the form', function(){
       
        cy.get('button.submit')
    })



    // third test
    it('Checks if I can select multiple toppings', function(){
        
        cy.get('input[type="checkbox"]')
    })
})



