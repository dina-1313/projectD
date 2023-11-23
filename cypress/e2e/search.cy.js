import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import orderPage from '../support/pages/OrderPage';
import user from '../fixtures/user.json';
import order from '../fixtures/order.json';
import { faker } from '@faker-js/faker';
import { findProduct } from '../support/helper';

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
order.card = faker.phone.number('51##############');

describe('Successful Order', () => {

  before(() => {
    homePage.visit();
    registrationPage.register(user);
    loginPage.login(user);

    cy.log('Find a Product')
    findProduct('OWASP Juice Shop T-Shirt');
  })

  it('Complete an Order', () => {
    const req = new Promise((resolve, reject) => {      
      setTimeout(() => {
        orderPage.completeFullOrder(order);
        resolve();
      }, 2000)
    })
    req.then(() => {
      console.log('Order is Made')
    })
  })
  
})