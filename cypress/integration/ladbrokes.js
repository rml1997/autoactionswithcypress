/*describe('Ladbrokes free bet getter/user', function() {
  it('Logs in, finds out which matches have free bets, works out best odds and bets them', function() {
    
    cy.visit('https://sports.ladbrokes.com/en/labelhost/login')
    
    cy.get('#username > input')
      .type(Cypress.env('lad_user'),{force: true})
    
    cy.get('#password > input')
      .type(Cypress.env('lad_pass'),{force: true})
    
    cy.get('.login')
      .click({force: true})
    cy.get('.user-name).should()
    cy.request('https://otf.coralsports.prod.cloud.ladbrokescoral.com/api/v1/initial-data/'+Cypress.env('lad_user')).its('body').as('myjson')
    this.myjson.activeGame.events.each(event=>{
      //For each event
    cy.request('https://sports.ladbrokes.com/event/football/english/premier-league/arsenal-v-liverpool/232416273/main-markets')
    })
  })
})*/
