describe('Secret test', function() {
  it('Checks secrets are accessible', function() {
    expect(cy.env('test_secret')).to.equal('Test')
  })
})