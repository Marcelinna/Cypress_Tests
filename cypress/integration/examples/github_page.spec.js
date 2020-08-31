///<reference types="Cypress"/>

describe("GitHub page tests", () => {
  it("Veryfied title of the page", () => {
    cy.visit("https://github.com/");
    cy.title().should(
      "eq",
      "The world’s leading software development platform · GitHub"
    );
  });

  it("Veryfied subpage Enterprise", () => {
    cy.visit("https://github.com/");
    cy.get('[data-ga-click="(Logged out) Header, go to Enterprise"]').click();
    cy.url().should("eq", "https://github.com/enterprise");
    cy.go("back");
    cy.url().should("eq", "https://github.com/");
  });

  it("Login verifying negative", () => {
    cy.visit("https://github.com/");
    cy.get("a[href='/login']").click();
    cy.url().should("eq", "https://github.com/login");
    cy.get('[name="login"]').clear().type("examplemail@gmail.com");
    cy.get('[name="password"]').clear().type("1234");
    cy.get('[value="Sign in"]').click();
    cy.get(".flash.flash-full.flash-error").should("be.visible");
  });

  it("Searching input test", () => {
    cy.visit("https://github.com/");
    cy.get(".header-search-input").type("node{enter}");
    cy.url().should("contain", "node");
  });

  it("Main page contains register field", () => {
    cy.visit("https://github.com/");
    cy.get("form").should("exist").and("be.visible");
    cy.get("label[for='user[login]']").should("have.text", "Username");
    cy.get("label[for='user[email]']").should("have.text", "Email");
    cy.get("label[for='user[password]']").should("have.text", "Password");
    cy.get("button[type='submit']").contains("Sign up for GitHub");
  });

  it("Pick 'Code review' from tab Why GitHub in nav menu", () => {
    cy.get(":nth-child(1) > .HeaderMenu-details > .HeaderMenu-summary").click();
    cy.contains("Code review").click();
    cy.get("h1").should("have.text", "Write better code");
  });
});
