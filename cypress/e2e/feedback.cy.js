import homePage from '../support/pages/HomePage';
import feedback from '../fixtures/feedback.json';
import { faker } from '@faker-js/faker';

feedback.comment = faker.location.zipCode('#########')

describe('Successful Feedback', () => {

  it('Successful Feedback', () => {

    homePage.visit();

    cy.intercept('GET', '/rest/captcha/', {
      status: 200,
      body: { "captchaId": "158", "captcha": "5+3+1", "answer": "9" }
    })

    //visit feedback page
    cy.visit('/#/contact')
    // cy.contains('menu').click();
    // cy.contains(' Customer Feedback ').click();

    //leave a comment
    cy.get('[class="mat-form-field-infix ng-tns-c119-12"]').type(feedback.comment);

    //rate 5 stars
    cy.get('#rating').click('center');

    //recapcha
    cy.get('#captchaControl').type('9');
    cy.get('#submitButton').click()

    //check notification
    //cy.get('[class="mat-simple-snack-bar-content"]').should('have.text', `Thank you for your feedback. `)
    //cy.get('[class="mat-simple-snack-bar-content"]').should('not.have.text', `Wrong answer to CAPTCHA. Please try again.`)

  })

})



