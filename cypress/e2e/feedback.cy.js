import homePage from '../support/pages/HomePage';
import feedback from '../fixtures/feedback.json';
import { faker } from '@faker-js/faker';
import feedbackPage from '../support/pages/FeedbackPage';

feedback.comment = faker.location.zipCode('#########')

describe('Successful Feedback', () => {

  it('Successful Feedback', () => {

    homePage.visit();
    feedbackPage.visit();
    feedbackPage.leaveFeedback(feedback.comment);
    cy.get('.mat-simple-snack-bar-content').should('have.text', 'Thank you so much for your amazing 5-star feedback!');

  })

})



