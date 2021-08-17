
describe("All the elements are present on the page", () => {
    beforeEach(() => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php');
    })
    it("Fill in the “Username” and “Password” input fields and click the “LogIn” button", () => {
        cy.get('input[name="username"]').type(Cypress.env('username'));
        cy.get('input[name="password"]').type(Cypress.env('password'));
        cy.get('.btn.btn-success').click();
    })
})