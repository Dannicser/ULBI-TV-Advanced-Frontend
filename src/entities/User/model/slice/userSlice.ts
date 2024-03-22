import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserSchema } from "../types/user";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

const initialState: IUserSchema = {
  _initited: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const authData = window.localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (authData) {
        state.authData = JSON.parse(authData);
      }

      state._initited = true; // когда юзер загрузился
    },
    logout: (state) => {
      state.authData = undefined;

      window.localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
