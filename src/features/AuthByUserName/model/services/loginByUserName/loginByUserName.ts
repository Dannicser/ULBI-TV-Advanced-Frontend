import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { api } from "@/shared/api/api";

import { IUser, userActions } from "@/entities/User";

import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

//3 параметром в дженерик указывается типизация thunkApi, что конкретно хотим вернуть

export const loginByUserName = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
  "login/loginByUserName",
  async (authData, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.post<IUser>("login", authData);

      if (!response.data) {
        throw new Error();
      }

      thunkApi.dispatch(userActions.setAuthData(response.data));

      window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue("Error");
    }
  }
);
