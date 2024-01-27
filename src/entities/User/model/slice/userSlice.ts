import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserSchema } from "../types/user";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const authData = JSON.parse(window.localStorage.getItem(USER_LOCAL_STORAGE_KEY));

      if (authData) {
        state.authData = authData;
      }
    },
    logout: (state) => {
      state.authData = undefined;

      window.localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
