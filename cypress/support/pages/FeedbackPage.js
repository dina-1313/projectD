import BasePage from "./BasePage";

class FeedbackPage extends BasePage {
    constructor() {
        super()
        this.elements.emailField = '#emailControl';
        
    }

    visit() {
        cy.log('Open Registration Page');
        loginPage.openRegistrationPage();
    }

    getEmailField() {
        return cy.get(this.elements.emailField);
    }

    
    /**
         *  Fill in registration fields
         *  @param {Object} user - user object
         *  User object example can be found in ./cypress/fixtures/user.json
         */

    fillRegistrationFields(user) {
        cy.log('Fill In Registration Form and Submit');
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getConfirmPasswordField().type(user.confirmPassword);
        this.getSecurityDropdown().click({ force: true });
        this.getListbox();
        this.getSecurityQuestion().click();
        this.getAnswerField().type(user.answer);
        this.getRegistrationButton().click()
    }

    getOutside() {
        return cy.get(this.elements.outside);
    }

    emptyRegistrationFields() {
        cy.log('Empty Registration Fields');
        this.getEmailField().click();
        this.getPasswordField().click();
        this.getConfirmPasswordField().click();        
        this.getAnswerField().click();
        this.getSecurityDropdown().click({ force: true });
        this.getOutside().click()        
    }
     
}

export default new FeedbackPage()


