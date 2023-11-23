import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import orderPage from '../support/pages/OrderPage';
import user from '../fixtures/user.json';
import order from '../fixtures/order.json';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email({ provider: 'fakeMail.com' });
user.password = faker.internet.password({ length: 20 });
user.confirmPassword = user.password;
user.answer = faker.internet.userName()

order.country = faker.location.country();
order.name = faker.person.firstName();
order.mobileNumber = faker.phone.number('#########');
order.zip = faker.location.zipCode('####');
order.address = faker.location.streetAddress();
order.city = faker.location.city();
order.state = faker.location.state();
order.card = faker.phone.number('################');

describe('Successful Order', () => {

  before(() => {
    homePage.visit();
    registrationPage.register(user);
    loginPage.login(user);
  })

  it('Successful Order', () => {
     
    orderPage.addToCart();

    cy.wait(2000);

    orderPage.openAddDeliveryAddressForm();
    orderPage.fillAddressForm(order);
    orderPage.chooseAddress();
    orderPage.chooseDeliverySpeed();
    orderPage.addCard(order);
    orderPage.chooseCard();
    orderPage.checkIfOrderIsPlaced()
  })

})