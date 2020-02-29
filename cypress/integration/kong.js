describe('Kongregate BOTD getter', function() {
  it('Logs in, loads the page to get botd', function() {
    
    cy.visit('https://kongregate.com/badges')
    
    cy.get('#welcome_username')
      .type(Cypress.env('kong_user'))
    
    cy.get('#welcome_password')
      .type(Cypress.env('kong_pass'))
    
    cy.get('#welcome_box_sign_in_button')
      .click()
    
    let link = cy.get('.badge_link .click_link').href
    
    cy.visit(link+'/chat_achievements')
  })
})