//import '../pageObjects/loginPage'
import LogInPage from '../pageObject/loginPage';
const logInPage = new LogInPage();
const ENV = Cypress.env()

describe("QA Automation test task", () => {

    beforeEach(() => {
        logInPage.visit();
    })

    it("Fill in the “Username” and “Password” input fields and click the “LogIn” button", () => {
        logInPage.fillUsername(ENV.incorrectUsername);
        logInPage.fillPassword(ENV.incorrectPassword);
        logInPage.logIn();
    })

    it("Verify that all the elements are present on the page", () => {
        logInPage.verifyElements(logInPage.getUsernameField());
        logInPage.verifyElements(logInPage.getPasswordField());
        logInPage.verifyElements(logInPage.getLoginButton());
    })

    it("Verify that all the error messages appear (with empty fields “Username” and “Password”)", () => {
        logInPage.logIn();
        logInPage.verifyError(logInPage.getErrorDueToUsername(), "Please enter username.");
        logInPage.verifyError(logInPage.getErrorDueToPassword(), "Please enter your password.");
    })

    it("Verify that all the error messages appear (with empty field “Password”)", () => {
        logInPage.fillUsername(ENV.incorrectUsername)
        logInPage.logIn();
        logInPage.verifyError(logInPage.getErrorDueToPassword(), "Please enter your password.");
    })

    it("Verify that all the error messages appear (with empty field “Username”)", () => {
        logInPage.fillPassword(ENV.incorrectPassword)
        logInPage.logIn();
        logInPage.verifyError(logInPage.getErrorDueToUsername(), "Please enter username.");
    })

    it("Verify that all the error messages appear (When all fields are filled with incorrect values)", () => {
        logInPage.fillUsername(ENV.incorrectUsername)
        logInPage.fillPassword(ENV.incorrectPassword)
        logInPage.logIn();
        logInPage.verifyError(logInPage.getErrorDueToUsername(), "No account found with that username.");
    })

    it("Successful login", () => {
        logInPage.loginSuccessRequest();
    })
})
