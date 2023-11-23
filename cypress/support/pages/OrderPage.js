import BasePage from "./BasePage";

class DeliveryPage extends BasePage {
    constructor() {
        super();

        //open cart and proceed to delivery address
        this.elements.cart = '[aria-label="Show the shopping cart"]';
        this.elements.checkoutButton = '#checkoutButton';
        this.elements.addNewAddressButton = '[aria-label="Add a new address"]';

        //add new delivery address
        this.elements.country = '#mat-input-9';
        this.elements.name = '#mat-input-10';
        this.elements.mobileNumber = '#mat-input-11';
        this.elements.zip = '#mat-input-12';
        this.elements.address = '#address';
        this.elements.city = '#mat-input-14';
        this.elements.state = '#mat-input-15';
        this.elements.submitAddressButton = '#submitButton';

        //choose delivery address
        this.elements.chooseAddressRadio = '#mat-radio-40';
        this.elements.continueToPaymentButton = '[aria-label="Proceed to payment selection"]';

        //choose delivery speed
        this.elements.deliverySpeed = '#mat-radio-43';
        this.elements.continueToDeliveryMethod = '[aria-label="Proceed to delivery method selection"]';

        //add new card
        this.elements.cardDetails = '#mat-expansion-panel-header-0';
        this.elements.cardName = '#mat-input-16';
        this.elements.cardNumber = '#mat-input-17';
        this.elements.cardExpiryMonth = '#mat-input-18';
        this.elements.cardExpiryYear = '#mat-input-19';
        this.elements.submitCardButton = '#submitButton';

        //choose card
        this.elements.chooseCardRadio = '#mat-radio-44';
        this.elements.continueToReview = '[aria-label="Proceed to review"]';

        //complete order and check order summary
        this.elements.pay = '#checkoutButton';
        this.elements.orderSummary = '[class="heading-text"]'
    }

    addToCart() {
        cy.log('Add a Product to a Cart');
        cy.contains('Carrot Juice (1000ml)')
            .parents('[class="mat-grid-tile-content"]')
            .find('[aria-label="Add to Basket"]')
            .click();
    }


    getCart() {
        return cy.get(this.elements.cart)
    }
    getCheckoutButton() {
        return cy.get(this.elements.checkoutButton)
    }
    getAddNewAddressButton() {
        return cy.get(this.elements.addNewAddressButton)
    }
    openAddDeliveryAddressForm() {
        cy.log('Proceed with Delivery Address');
        this.getCart().click();
        this.getCheckoutButton().click();
        this.getAddNewAddressButton().click();
    }


    getCountry() {
        return cy.get(this.elements.country)
    }
    getName() {
        return cy.get(this.elements.name)
    }
    getMobileNumber() {
        return cy.get(this.elements.mobileNumber)
    }
    getZip() {
        return cy.get(this.elements.zip)
    }
    getAddress() {
        return cy.get(this.elements.address)
    }
    getCity() {
        return cy.get(this.elements.city)
    }
    getState() {
        return cy.get(this.elements.state)
    }
    getSubmitAddressButton() {
        return cy.get(this.elements.submitAddressButton)
    }
    fillAddressForm(order) {
        cy.log('Fill In Address Form');
        this.getCountry().type(order.country);
        this.getName().type(order.name);
        this.getMobileNumber().type(order.mobileNumber);
        this.getZip().type(order.zip);
        this.getAddress().type(order.address);
        this.getCity().type(order.city);
        this.getState().type(order.state);
        this.getSubmitAddressButton().click();
    }

    getChooseAddressRadio() {
        return cy.get(this.elements.chooseAddressRadio)
    }
    getContinueToPaymentButton() {
        return cy.get(this.elements.continueToPaymentButton)
    }
    chooseAddress() {
        cy.log('Choose Address and Proceed');
        this.getChooseAddressRadio().click();
        this.getContinueToPaymentButton().click();
    }

    getDeliverySpeed() {
        return cy.get(this.elements.deliverySpeed)
    }
    getContinueToDeliveryMethod() {
        return cy.get(this.elements.continueToDeliveryMethod)
    }
    chooseDeliverySpeed() {
        cy.log('Choose Delivery Speed and Proceed');
        this.getDeliverySpeed().click({ force: true });
        this.getContinueToDeliveryMethod().click()
    }


    getCardName() {
        return cy.get(this.elements.cardName)
    }
    getCardNumber() {
        return cy.get(this.elements.cardNumber)
    }
    getCardDetails() {
        return cy.get(this.elements.cardDetails)
    }
    getCardExpiryMonth() {
        return cy.get(this.elements.cardExpiryMonth)
    }
    getCardExpiryYear() {
        return cy.get(this.elements.cardExpiryYear)
    }
    getSubmitCardButton() {
        return cy.get(this.elements.submitCardButton)
    }
    addCard(order) {
        cy.log('Open and Fill Card Form');
        this.getCardDetails().click();
        this.getCardName().type(order.name);
        this.getCardNumber().type(order.card);
        this.getCardExpiryMonth().select('2');
        this.getCardExpiryYear().select('2083');
        this.getSubmitCardButton().click();
    }


    getChooseCardRadio() {
        return cy.get(this.elements.chooseCardRadio)
    }
    getContinueToReview() {
        return cy.get(this.elements.continueToReview)
    }
    chooseCard() {
        cy.log('Choose Card and Proceed');
        this.getChooseCardRadio().click({ force: true });
        this.getContinueToReview().click()
    }


    getPlaceAndPayButton() {
        return cy.get(this.elements.pay)
    }
    getOrderSummary() {
        return cy.get(this.elements.orderSummary)
    }
    checkIfOrderIsPlaced() {
        cy.log('Check if Order is Placed');
        this.getPlaceAndPayButton().click({ force: true });
        this.getOrderSummary().should('have.text', `Order Summary`)
    }

    
    completeFullOrder(order) {
        cy.log('Complete Full Order');
        this.openAddDeliveryAddressForm();
        this.fillAddressForm(order);
        this.chooseAddress();
        this.chooseDeliverySpeed();
        this.addCard(order);
        this.chooseCard();
        this.checkIfOrderIsPlaced()
    }
}

export default new DeliveryPage();




