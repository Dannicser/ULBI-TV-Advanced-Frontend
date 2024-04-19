import { selectByTestId } from "cypress/helpers/selectByTestId";
import { resetProfile } from "cypress/support/commands/profile";

describe("profile", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login().then((data) => {
      cy.visit("/profile/" + data.id);
    });
  });

  afterEach(() => {
    cy.visit("");
    resetProfile();
  });

  it("ProfileCard was loaded", () => {
    cy.get(selectByTestId("ProfileCard"));
  });

  it("change first name", () => {
    cy.updateProfile();
    cy.get(selectByTestId("ProfileCard.firstname")).should("have.value", "aleshka");
    cy.get(selectByTestId("ProfileCard.lastname")).should("have.value", "aleshkovich");
  });

  it("change last name", () => {
    cy.updateProfile();
  });
});
