import BasePage from "./BasePage";
import loginPage from "./LoginPage";

class RegistrationPage extends BasePage {
    constructor() {
        super()
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.confirmPasswordField = '#repeatPasswordControl';
        this.elements.securityDropdown = '[class="mat-form-field-label-wrapper ng-tns-c119-16"]';
        this.elements.listbox = '[role="listbox"]';
        this.elements.securityQuestion = '#mat-option-6';
        this.elements.answerField = '#securityAnswerControl';

        this.elements.registrationButton = '#registerButton';

        this.elements.outside = 'body'

        this.elements.emailErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-13"]';
        this.elements.passwordErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-14"]';
        this.elements.confirmPasswordErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-15"]';
        this.elements.securityQuestionErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-16"]';
        this.elements.answerErrorMessage = '[class="mat-form-field-subscript-wrapper ng-tns-c119-18"]';
    }

    visit() {
        cy.log('Open Registration Page');
        loginPage.openRegistrationPage();
    }

    getEmailField() {
        return cy.get(this.elements.emailField);
    }

    getPasswordField() {
        return cy.get(this.elements.passwordField);
    }

    getConfirmPasswordField() {
        return cy.get(this.elements.confirmPasswordField);
    }

    getSecurityDropdown() {
        return cy.get(this.elements.securityDropdown);
    }

    getListbox() {
        return cy.get(this.elements.listbox);
    }

    getSecurityQuestion() {
        return cy.get(this.elements.securityQuestion);
    }

    getAnswerField() {
        return cy.get(this.elements.answerField);
    }

    getRegistrationButton() {
        return cy.get(this.elements.registrationButton);
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

    register(user) {
        this.visit();
        this.fillRegistrationFields(user)
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
  
    getEmailErrorMessage() {
        return cy.get(this.elements.emailErrorMessage);
    }
    getPasswordErrorMessage() {
        return cy.get(this.elements.passwordErrorMessage);
    }
    getConfirmPasswordErrorMessage() {
        return cy.get(this.elements.confirmPasswordErrorMessage);
    }
    getSecurityQuestionErrorMessage() {
        return cy.get(this.elements.securityQuestionErrorMessage);
    }
    getAnswerErrorMessage() {
        return cy.get(this.elements.answerErrorMessage);
    }

    checkRegistrationErrorMessages() {
        cy.log('Error Messages for Empty Registration Fields');
        this.getEmailErrorMessage().should('have.text', `Please provide an email address.`);
        this.getPasswordErrorMessage().should('have.text', `Please provide a password. `);
        this.getConfirmPasswordErrorMessage().should('have.text', ` Please repeat your password. `);      
        this.getSecurityQuestionErrorMessage().should('have.text', ` Please select a security question. `);
        this.getAnswerErrorMessage().should('have.text', ` Please provide an answer to your security question. `);      
    }
}

export default new RegistrationPage()


