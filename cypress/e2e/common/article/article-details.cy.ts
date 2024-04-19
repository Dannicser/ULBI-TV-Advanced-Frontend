import { selectByTestId } from "cypress/helpers/selectByTestId";

const articleTestId = 0;

describe("article details", () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.createArticle().then((article) => {
        cy.visit("/articles/" + article.id);
      });
    });
  });

  afterEach(() => {
    cy.removeArticle();
  });

  it("ArticleDetails was loaded", () => {
    cy.visit("/articles/" + articleTestId);
    cy.get(selectByTestId("ArticleDetailsPage")).should("exist");
  });

  it("ArticleRecommendationsList was loaded", () => {
    cy.visit("/articles/" + articleTestId);
    cy.get(selectByTestId("ArticleRecommendationsList")).should("exist");
  });

  it("rate article", () => {
    cy.visit("/articles/" + articleTestId);
    cy.get(selectByTestId("RatingCard")).should("exist");
    cy.setRate(5, "ok");
  });

  it("send comment", () => {
    cy.visit("/articles/" + articleTestId);
    cy.get(selectByTestId("AddCommentForm")); // скролл к блоку
    cy.addComment("test comment");
  });
});
