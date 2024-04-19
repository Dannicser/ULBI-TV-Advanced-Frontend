import { selectByTestId } from "cypress/helpers/selectByTestId";

export const updateProfile = () => {
  cy.get(selectByTestId("EditableProfileCardHeader.EditButton")).click();
  cy.get(selectByTestId("ProfileCard.firstname")).clear().type("aleshka");
  cy.get(selectByTestId("ProfileCard.lastname")).clear().type("aleshkovich");
  cy.get(selectByTestId("EditableProfileCardHeader.SaveButton")).click();
};

// тестовый id
export const resetProfile = (profileId: number = 3) => {
  cy.request({
    method: "PUT",
    url: "http://localhost:5000/profile/" + profileId,
    headers: {
      Authorization: "test",
    },
    body: {
      id: "3",
      firstname: "test",
      lastname: "test",
      age: 0,
      currency: "USD",
      country: "Russia",
      city: "test",
      username: "test",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThESJRRH7GZmnD7wCVaOdE0wnl1GWYjOUrp_b6kyKRTg&s",
    },
  }).then(({ body }) => {
    return body;
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>;
      resetProfile(): Chainable<void>;
    }
  }
}
