import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email({ provider: 'fakeMail.com' });
user.password = faker.internet.password({ length: 8 });
user.confirmPassword = user.password;
user.answer = faker.internet.userName()

beforeEach(() => {
  homePage.visit();
})

describe('Successful Registration', () => {

  it('Registration and Authorization', () => {
    registrationPage.visit();
    registrationPage.fillRegistrationFields(user);
    loginPage.login(user);
    loginPage.checkIfUserIsLoggedIn(user);
  })

})

describe('Failed Registration', () => {

  it('Failed Registration with Empty Registration Fields', () => {
    registrationPage.visit();
    registrationPage.emptyRegistrationFields();
    registrationPage.checkRegistrationErrorMessages();

    cy.log('Registration Button is Disabled for Empty Registration Fields')
    registrationPage.getRegistrationButton().should('be.disabled');
  })

})