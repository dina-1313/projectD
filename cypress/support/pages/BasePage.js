export default class BasePage {

    constructor() {
        this.elements = {};
        this.elements.dismissWelcomePopupButton = '.close-dialog';
        this.elements.acceptCookiesButton = '.cc-dismiss';
    }

    getAcceptCookiesButton() {
        return cy.get(this.elements.acceptCookiesButton);
    }

    getDismissWelcomePopupButton() {
        return cy.get(this.elements.dismissWelcomePopupButton);
    }

    dismissWelcomePopup() {
        cy.log('Dismiss Welcome Popup')
        this.getDismissWelcomePopupButton().click();
    }

    acceptCookies() {
        cy.log('Accept Cookies')
        this.getAcceptCookiesButton().click();
    }
}



