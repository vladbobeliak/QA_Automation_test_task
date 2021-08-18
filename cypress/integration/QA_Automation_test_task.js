
describe("QA Automation test task", () => {

    beforeEach(() => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php');
    })

    it("Fill in the “Username” and “Password” input fields and click the “LogIn” button", () => {
        cy.get('input[name="username"]').type(Cypress.env('username'));
        cy.get('input[name="password"]').type(Cypress.env('password'));
        cy.get('.btn.btn-success').click();
    })

    it("Verify that all the elements are present on the page", () => {
        cy.get('input[name="username"]').should('exist').and('be.visible');
        cy.get('input[name="password"]').should('exist').and('be.visible');
        cy.get('.btn.btn-success').should('exist').and('be.visible');
    })

    it("Verify that all the error messages appear (with empty fields “Username” and “Password”)", () => {
        cy.get('.btn.btn-success').click();
        cy.get(':nth-child(1) > .help-block').contains("Please enter username.").should('be.visible');
        cy.get(':nth-child(2) > .help-block').contains("Please enter your password.").should('be.visible');
    })

    it("Verify that all the error messages appear (with empty field “Password”)", () => {
        cy.get('input[name="username"]').type(Cypress.env('username'));
        cy.get('.btn.btn-success').click();
        cy.get(':nth-child(2) > .help-block').contains("Please enter your password.").should('be.visible');
    })

    it("Verify that all the error messages appear (with empty field “Username”)", () => {
        cy.get('input[name="password"]').type(Cypress.env('password'));
        cy.get('.btn.btn-success').click();
        cy.get(':nth-child(1) > .help-block').contains("Please enter username.").should('be.visible');
    })

    it("Verify that all the error messages appear (When all fields are filled with incorrect values)", () => {
        cy.get('input[name="username"]').type(Cypress.env('username'));
        cy.get('input[name="password"]').type(Cypress.env('password'));
        cy.get('.btn.btn-success').click();
        cy.get(':nth-child(1) > .help-block').contains("No account found with that username.").should('be.visible');
    })
})