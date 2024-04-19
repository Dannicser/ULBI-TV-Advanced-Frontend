import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

import { IUser } from "@/entities/User/index";

export const login = (username: string = "test", password: string = "test") => {
  cy.request({
    method: "POST",
    url: "http://localhost:5000/login",
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));

    return body;
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<IUser>; // что возвращает
    }
  }
}
