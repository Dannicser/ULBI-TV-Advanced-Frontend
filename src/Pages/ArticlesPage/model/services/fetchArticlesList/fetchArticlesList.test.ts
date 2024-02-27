// import { Dispatch } from "@reduxjs/toolkit";
// import { StateSchema } from "app/providers/StoreProvider";
// import axios, { AxiosStatic } from "axios";
// import { fetchArticlesList } from "./fetchArticlesList";

// jest.mock("axios");

// const mockedAxios = jest.mocked(axios, true);

// describe("fetchArticlesList", () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;
//   let api: jest.MockedFunctionDeep<AxiosStatic>;
//   let navigate: jest.MockedFn<any>;

//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//     api = mockedAxios;
//     navigate = jest.fn();
//   });

//   test("success", async () => {
//     const response = {
//       id: "1",
//       title: "Статья",
//     };

//     mockedAxios.get.mockReturnValue(Promise.resolve({ data: response }));

//     const thunk = fetchArticlesList();

//     const result = await thunk(dispatch, getState, { api, navigate });

//     expect(result.meta.requestStatus).toBe("fulfilled");
//     expect(result.payload).toEqual(response);
//     expect(dispatch).toHaveBeenCalledTimes(2);
//   });

//   test("fail", async () => {
//     mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }));

//     const thunk = fetchArticlesList();

//     const result = await thunk(dispatch, getState, { api, navigate });

//     expect(result.meta.requestStatus).toBe("rejected");
//     expect(result.payload).toEqual("error");
//     expect(dispatch).toHaveBeenCalledTimes(2);
//   });
// });
