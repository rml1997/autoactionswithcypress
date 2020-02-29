describe('Secret test', function() {
  it('Checks secrets are accessible', function() {
    
    console.log('Secret = ' + Cypress.env('test_secret'))
    
  })
})