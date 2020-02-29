describe('Epic Games free game getter', function() {
  it('Logs in, gets free games you need', function() {
    
    cy.visit('https://www.epicgames.com/store/en-US/free-games')
    
    cy.contains('free-now')
    .each(function(link){
        cy.visit(link)
        let button = cy.get('#PurchaseButton-button_*')
        if(button.contains('Get')){
            button.click()
        }
    })
  })
})