const CREDETIALS = Cypress.env("credetials");

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
        cy.visit(Cypress.env('login_url'));
    }

    verifyElements(element) {
        element
            .should('exist')
            .and('be.visible');
    }

    loginSuccessRequest() {
        cy.request({
            method: 'POST',
            url: Cypress.env('post_form_url'),
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