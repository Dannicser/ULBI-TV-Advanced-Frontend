import { IArticle } from "@/entities/Article";

const defaultArticle = {
  id: "0",
  title: "test",
  subtitle: "test",
  img: "https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png",
  views: 0,
  createdAt: "26.02.2022",
  userId: "3",
  type: ["IT"],
  blocks: [],
};

export const createArticle = () => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:5000/articles",
      headers: {
        Authorization: "test",
      },
      body: defaultArticle,
    })
    .then(({ body }) => {
      return body;
    });
};

export const removeArticle = () => {
  return cy
    .request({
      method: "DELETE",
      url: "http://localhost:5000/articles/0",
      headers: {
        Authorization: "test",
      },
    })
    .then(({ body }) => {
      return body;
    });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(): Chainable<IArticle>;
      removeArticle(): Chainable<void>;
    }
  }
}
