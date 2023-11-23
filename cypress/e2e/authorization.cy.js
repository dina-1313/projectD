import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email({ provider: 'fakeMail.com' });
user.password = faker.internet.password({ length: 8 });
user.passwordIncorrect = faker.internet.password({ length: 3 });
user.confirmPassword = user.password;
user.answer = faker.internet.userName()

beforeEach(() => {
  homePage.visit();
})

describe('Successful Authorization', () => {

  it('Registration and Authorization', () => {
    registrationPage.register(user);
    loginPage.login(user);
    loginPage.checkIfUserIsLoggedIn(user);
  })

})

describe('Failed Authorization', () => {

  it('Failed Authorization with Empty Authorization Fields', () => {
    loginPage.visit();
    loginPage.emptyLoginFields();
    loginPage.checkLoginErrorMessages();

    cy.log('Login Button is Disabled for Empty Login Fields')
    loginPage.getLoginSubmitButton().should('be.disabled');
  })

  it('Failed Authorization with Incorrect Password', () => {
    loginPage.visit();
    loginPage.incorrectLogin(user);
    loginPage.checkIncorrectLoginMessage();
  })

})