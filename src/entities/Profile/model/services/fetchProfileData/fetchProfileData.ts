import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";
import { userActions } from "entities/User";

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>("profile/fetch", async (_, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.get<IProfile>("/profile");

    if (!response.data) {
      throw Error();
    }

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue("Error");
  }
});
