import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("article list", () => {
  beforeEach(() => {
    cy.login().then(() => {});
  });

  it("ArticleList was loaded", () => {
    cy.visit("/articles");
    cy.get(selectByTestId("ArticleList")).should("exist");
  });

  it("ArticleListItems were loaded more then 1", () => {
    cy.visit("/articles");
    cy.get(selectByTestId("ArticleListItem")).should("have.length.greaterThan", 1);
  });
});
