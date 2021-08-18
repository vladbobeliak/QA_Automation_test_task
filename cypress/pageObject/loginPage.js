
const ENV = Cypress.env()
class LogInPage {
    getUsernameField() {
        return cy.get('input[name="username"')
    }
    getPasswordField() {
        return cy.get('input[name="password"]')
    }
    getLoginButton() {
        return cy.get('.btn.btn-success')
    }
    getErrorDueToUsername() {
        return cy.get(':nth-child(1) > .help-block')
    }
    getErrorDueToPassword() {
        return cy.get(':nth-child(2) > .help-block')
    }
    verifyError(error, text) {
        error
            .contains(text)
            .should('be.visible');
    }

    visit() {
        cy.visit(ENV.url + '/qa-portal/greet.php');
    }

    verifyElements(element) {
        element
            .should('exist')
            .and('be.visible');
    }

    fillUsername(value) {
        this.getUsernameField()
            .type(value);
    }

    fillPassword(value) {
        this.getPasswordField()
            .type(value);
    }

    logIn() {
       this.getLoginButton()
            .click();
    }

    loginSuccessRequest() {
        cy.request({
            method: 'POST',
            url: ENV.url + '/qa-portal/registerlogin/registerlogin.php',
            form: true,
            body: {
                username: ENV.correctUsername,
                password: ENV.correctPassword,
            },
            }).then(
                (response) => {
                    expect(response.status)
                        .to.eq(302);
                })
    }
}

export default LogInPage;