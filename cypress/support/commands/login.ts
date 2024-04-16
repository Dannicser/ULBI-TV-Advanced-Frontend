import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

export const login = (username: string = "testuser", password: string = "123") => {
  cy.request({
    method: "POST",
    url: "http://localhost:5000/login",
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
  });
};
