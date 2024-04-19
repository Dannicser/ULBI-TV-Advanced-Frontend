import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("Routing", () => {
  describe("unauthorized", () => {
    it("go to MainPage", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("go to ProfilePage", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("go to Non-existent page", () => {
      cy.visit("/sdfksndkfns");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });

  describe("authorized", () => {
    beforeEach(() => {
      cy.login();
    });

    it("go to MainPage", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("go to ProfilePage", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });

    it("go to ArticlesPage", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
