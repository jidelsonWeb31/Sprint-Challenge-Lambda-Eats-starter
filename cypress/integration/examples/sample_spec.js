describe('Form inputs', function () {


    it('Checks if I can add text', function(){
        
     cy.visit('index.html')

        cy.get('input[name="name"]')
        .type('Lady Gaga')
        .should('have.value', 'Lady Gaga')
    })

    

    // test
    it('Tests that my button is initially disabled', function(){
        cy.get('button.submit')
        .should('be.disabled')
    })


    //test
    it('Checks if I can change special instructions', function(){
        
           cy.get('input[name="specialInstructions"]')
           .type('Come up the stairs')
           .should('have.value', 'Come up the stairs')
       })
   

       //test
it('Checks if I can select a size', function(){
    cy.get('select[name="size"]')
    .select('large')
    .should('have.value', 'large')
})

    //  test
    it('Checks if I can select multiple toppings', function(){
        
        cy.get('input[type="checkbox"]')
        .select('sausage')
        .should('have.value', 'sausage')
    })

// // test
// it('Tests that my button submits', function(){
//     cy.get('button.submit')
//     .should('not.be.disabled')
// })

})

describe('Submitting Order', () => {
    it('can submit an order', () => {
        cy.visit('index.html')
        cy.get('input[name="name"]').type('Lady Gaga')
        cy.get('input[name="specialInstructions"]').type('Come up the stairs')
        cy.get('select[name="size"]').select('large')
    })
})




