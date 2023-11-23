import BasePage from "./BasePage";

class FeedbackPage extends BasePage {

    constructor() {
        super();
        this.elements.comment = '#comment';
        this.elements.rating = '#rating';
        this.elements.captchaField = '#captchaControl';
        this.elements.captcha = '#captcha';
        this.elements.submitButton = '#submitButton';
        this.elements.notification = '.mat-simple-snack-bar-content';

    }

    visit() {
        cy.log('Open Feedback Page');
        cy.visit('/#/contact');
    }

    getCommentField() {
        return cy.get(this.elements.comment)
    }

    getRatingLine() {
        return cy.get(this.elements.rating)
    }

    getCaptchaField() {
        return cy.get(this.elements.captchaField)
    }

    getCaptcha() {
        return cy.get(this.elements.captcha)
    }

    getSubmitButton() {
        return cy.get(this.elements.submitButton)
    }

    getConfirmationMessage() {
        return cy.get(this.elements.notification)
    }

    solveCaptcha() {
        this.getCaptcha().then((captcha) => {
            let result = eval(captcha.text());
            this.getCaptchaField().type(result);
        })
    }

    leaveFeedback(feedback) {
        cy.log('Fill and Confirm Feedback Form');
        this.getCommentField().type(feedback);
        this.getRatingLine().click('bottomRight');
        this.solveCaptcha();
        this.getSubmitButton().click();
    }

} export default new FeedbackPage