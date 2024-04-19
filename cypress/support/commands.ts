import { createArticle, removeArticle } from "./commands/article";
import { addComment } from "./commands/comments";
import { login } from "./commands/login";
import { resetProfile, updateProfile } from "./commands/profile";
import { setRate } from "./commands/rating";

Cypress.Commands.add("login", login); // добавляем фукнцию
Cypress.Commands.add("resetProfile", resetProfile);
Cypress.Commands.add("updateProfile", updateProfile);
Cypress.Commands.add("createArticle", createArticle);
Cypress.Commands.add("removeArticle", removeArticle);
Cypress.Commands.add("addComment", addComment);
Cypress.Commands.add("setRate", setRate);

export {};
