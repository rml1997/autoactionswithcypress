describe('Kongregate BOTD getter', function() {
  it('Logs in, loads the page to get botd', function() {
    
    cy.visit('https://kongregate.com/badges')
    
    cy.get('.botd_title > strong > a').invoke('attr', 'href')
      .then(link => cy.visit( link + '/chat_achievements'))

    cy.get('#username')
      .type(Cypress.env('kong_user'),{force: true})
    
    cy.get('#password')
      .type(Cypress.env('kong_pass'),{force: true})
    
    cy.get('#sessions_new_form_spinner')
      .click({force: true})
    
    cy.wait(100)
  })
})