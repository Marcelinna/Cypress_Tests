///<reference types="Cypress"/>

describe('GitHub page tests', () => {
    it('Veryfied title of the page', () => {
        cy.visit("https://github.com/")
        cy.title().should("eq", "The world’s leading software development platform · GitHub")
    })
  })
  