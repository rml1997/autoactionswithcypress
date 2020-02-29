describe('Kongregate BOTD getter', function() {
  it('Logs in, loads the page to get botd', function() {
    
    cy.visit('https://kongregate.com/badges')
    
    cy.get('#welcome_username')
      .type(Cypress.env('kong_user'),{force: true})
    
    cy.get('#welcome_password')
      .type(Cypress.env('kong_pass'),{force: true})
    
    cy.get('#welcome_box_sign_in_button')
      .click({force: true})
    
    let link = cy.get('.botd_title > strong > a').href
    
    cy.visit(link+'/chat_achievements')
  })
})