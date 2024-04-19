import { selectByTestId } from "cypress/helpers/selectByTestId";

export const setRate = (starsCount: number = 5, feedback: string = "") => {
  cy.get(selectByTestId("StartRating." + starsCount)).click();
  cy.get(selectByTestId("RatingCard.Input")).type(feedback);
  cy.get(selectByTestId("RatingCard.Button.Send")).click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedback: string): Chainable<void>;
    }
  }
}
