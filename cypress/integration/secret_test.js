describe('Secret test', function() {
  it('Checks secrets are accessible', function() {
    expect(Cypress.env('test_secret')).to.equal('Test')
  })
})