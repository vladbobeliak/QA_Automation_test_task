import LogInPage from '../pageObject/loginPage';
const CREDETIALS = Cypress.env("credetials")
const logInPage = new LogInPage();

describe("QA Automation test task", () => {

    beforeEach(() => {
        logInPage.visit();
    })

    it("Fill in the “Username” and “Password” input fields and click the “LogIn” button", () => {
        logInPage.setUsername(CREDETIALS.incorrectUsername);
        logInPage.setPassword(CREDETIALS.incorrectPassword);
        logInPage.setLogIn();
    })

    it("Verify that all the elements are present on the page", () => {
        logInPage.verifyElements(logInPage.getUsernameField());
        logInPage.verifyElements(logInPage.getPasswordField());
        logInPage.verifyElements(logInPage.getLoginButton());
    })

    it("Verify that all the error messages appear (with empty fields “Username” and “Password”)", () => {
        logInPage.setLogIn();
        logInPage.verifyError(logInPage.getErrorDueToUsername(), "Please enter username.");
        logInPage.verifyError(logInPage.getErrorDueToPassword(), "Please enter your password.");
    })

    it("Verify that all the error messages appear (with empty field “Password”)", () => {
        logInPage.setUsername(CREDETIALS.incorrectUsername)
        logInPage.setLogIn();
        logInPage.verifyError(logInPage.getErrorDueToPassword(), "Please enter your password.");
    })

    it("Verify that all the error messages appear (with empty field “Username”)", () => {
        logInPage.setPassword(CREDETIALS.incorrectPassword)
        logInPage.setLogIn();
        logInPage.verifyError(logInPage.getErrorDueToUsername(), "Please enter username.");
    })

    it("Verify that all the error messages appear (When all fields are filled with incorrect values)", () => {
        logInPage.setUsername(CREDETIALS.incorrectUsername)
        logInPage.setPassword(CREDETIALS.incorrectPassword)
        logInPage.setLogIn();
        logInPage.verifyError(logInPage.getErrorDueToUsername(), "No account found with that username.");
    })

    it("Successful login", () => {
        logInPage.loginSuccessRequest();
    })
})
