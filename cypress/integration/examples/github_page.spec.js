///<reference types="Cypress"/>

describe('GitHub page tests', () => {
    it('Veryfied title of the page', () => {
        cy.visit("https://github.com/")
        cy.title().should("eq", "The world’s leading software development platform · GitHub")
    })

    it("Veryfied subpage Enterprise", () => {
        cy.visit("https://github.com/")
        cy.get('[data-ga-click="(Logged out) Header, go to Enterprise"]').click();
        cy.url().should("eq", "https://github.com/enterprise");
        cy.go('back');
        cy.url().should("eq", "https://github.com/");


    })

    it("")
})
