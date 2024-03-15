import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { updateProfiledata } from "./updateProfileData";
import { ValidateProfileError } from "../../consts/consts";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("updateProfileData", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let navigate: jest.MockedFn<any>; // для extra api
  let api: jest.MockedFunctionDeep<AxiosStatic>;

  beforeEach(() => {
    dispatch = jest.fn(); // мокаем
    navigate = jest.fn();
    //прокидываем стейт для фанка
    getState = jest.fn(
      () =>
        ({
          profile: {
            data: { firstname: "danil", lastname: "dmitriev", age: 20 },
          },
        } as StateSchema)
    );
    api = mockedAxios;
  });

  test("success", async () => {
    const response = {
      firstname: "danil",
      lastname: "dmitriev",
      age: 20,
    };

    mockedAxios.put.mockReturnValue(Promise.resolve({ data: response }));

    const thunk = updateProfiledata("1");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(response);
    expect(dispatch).toHaveBeenCalled();
  });

  test("server error", async () => {
    mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = updateProfiledata("1");

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    expect(dispatch).toHaveBeenCalled();
  });

  test("validate error", async () => {
    getState = jest.fn(
      () =>
        ({
          profile: {
            data: {},
          },
        } as StateSchema)
    );

    const thunk = updateProfiledata();

    const result = await thunk(dispatch, getState, { api, navigate });

    expect(result.meta.requestStatus).toBe("rejected");
    expect(dispatch).toHaveBeenCalled();
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_NAME, ValidateProfileError.INCORRECT_USER_AGE]);
  });
});
