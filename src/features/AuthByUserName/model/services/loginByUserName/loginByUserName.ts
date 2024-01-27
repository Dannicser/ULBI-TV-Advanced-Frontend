import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

//3 параметром в дженерик указывается типизация thunkApi, что конкретно хотим вернуть

export const loginByUserName = createAsyncThunk<IUser, ILoginByUsernameProps, { rejectValue: string }>(
  "login/loginByUserName",
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<IUser>("http://localhost:5000/login", authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t("Error"));
    }
  }
);
