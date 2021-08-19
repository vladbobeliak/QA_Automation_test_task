const CREDETIALS = Cypress.env("credetials");
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

    setUsername(value) {
        this.getUsernameField()
            .type(value);
    }

    setPassword(value) {
        this.getPasswordField()
            .type(value);
    }

    setLogIn() {
       this.getLoginButton()
            .click();
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

    setUsername(value) {
        this.getUsernameField()
            .type(value);
    }

    setPassword(value) {
        this.getPasswordField()
            .type(value);
    }

    setLogIn() {
       this.getLoginButton()
            .click();
    }

    loginSuccessRequest() {
        cy.request({
            method: 'POST',
            url: ENV.url + '/qa-portal/registerlogin/registerlogin.php',
            form: true,
            body: {
                username: CREDETIALS.correctUsername,
                password: CREDETIALS.correctPassword,
            },
            }).then(
                (response) => {
                    expect(response.status)
                        .to.eq(302);
                })
    }
}

export default LogInPage;