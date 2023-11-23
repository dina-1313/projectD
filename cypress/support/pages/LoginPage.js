import BasePage from "./BasePage";

class LoginPage extends BasePage {
    constructor() {
        super();

        //open login popup
        this.elements.headerAccountButton = '#navbarAccount';
        this.elements.loginButton = '#navbarLoginButton';              

        //login popup elements
        this.elements.loginEmailField = '#email';
        this.elements.loginPasswordField = '#password';
        this.elements.rememberMeCheckbox = '#rememberMe';
        this.elements.loginSubmitButton = '#loginButton';
        this.elements.registrationPageLink = '#newCustomerLink';

        //username in account menu and close account menu
        this.elements.userNameInAccount = 'button[aria-label="Go to user profile"] span';
        this.elements.outside = 'body';

        //login error messages
        this.elements.emailErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-11"]';
        this.elements.passwordErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-12"]';
        this.elements.incorrectLoginMessage = '[class="error ng-star-inserted"]';
    }

    getHeaderAccountButton() {
        return cy.get(this.elements.headerAccountButton)
    }
    getLoginButton() {
        return cy.get(this.elements.loginButton)
    }
    visit() {
        cy.log('Open Login Page');
        this.getHeaderAccountButton().click();
        this.getLoginButton().click();
    }


    getLoginEmailField() {
        return cy.get(this.elements.loginEmailField);
    }
    getLoginPasswordField() {
        return cy.get(this.elements.loginPasswordField);
    }
    getRememberMeCheckbox() {
        return cy.get(this.elements.rememberMeCheckbox);
    }
    getLoginSubmitButton() {
        return cy.get(this.elements.loginSubmitButton);
    }
    login(user) {
        //this.visit();
        this.getLoginEmailField().type(user.email);
        this.getLoginPasswordField().type(user.password);
        this.getRememberMeCheckbox().click();
        this.getLoginSubmitButton().click();
    }


    getRegistrationPageLink() {
        return cy.get(this.elements.registrationPageLink);
    }
    openRegistrationPage() {
        this.visit();
        this.getRegistrationPageLink().click()
    }    


    getHeaderAccountButton() {
        return cy.get(this.elements.headerAccountButton)
    }
    getUserNameInAccount() {
        return cy.get(this.elements.userNameInAccount);
    }
    checkIfUserIsLoggedIn(user) {
        this.getHeaderAccountButton().click();
        this.getUserNameInAccount().should('have.text', ` ${user.email} `);
    }


    getOutside() {
        return cy.get(this.elements.outside);
    }
    emptyLoginFields() {
        cy.log('Empty Login Fields');
        this.getLoginEmailField().click();
        this.getLoginPasswordField().click();
        this.getOutside().click();
    }


    getEmailErrorMessage() {
        return cy.get(this.elements.emailErrorMessage);
    }
    getPasswordErrorMessage() {
        return cy.get(this.elements.passwordErrorMessage);
    }
    checkLoginErrorMessages() {
        cy.log('Error Messages for Empty Login Fields');
        this.getEmailErrorMessage().should('have.text', `Please provide an email address.`);
        this.getPasswordErrorMessage().should('have.text', `Please provide a password.`);
    }


    incorrectLogin(user) {
        this.visit();
        this.getLoginEmailField().type(user.email);
        this.getLoginPasswordField().type(user.passwordIncorrect);
        this.getRememberMeCheckbox().click();
        this.getLoginSubmitButton().click();
    }


    getIncorrectLoginMessage() {
        return cy.get(this.elements.incorrectLoginMessage);
    }
    checkIncorrectLoginMessage() {
        cy.log('Error Message for Incorrect Login Data');
        this.getIncorrectLoginMessage().should('have.text', `Invalid email or password.`);
    }
}

export default new LoginPage();




