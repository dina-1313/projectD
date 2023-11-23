import BasePage from "./BasePage";

class HomePage extends BasePage {

    constructor() {
        super()        
    }

    visit() {
        cy.log('Open the Site, Dismiss Welcome Message and Accept Cookies')
        cy.visit('/');
        this.dismissWelcomePopup();
        this.acceptCookies();
    }
}

export default new HomePage()