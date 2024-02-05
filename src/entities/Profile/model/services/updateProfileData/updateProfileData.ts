import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";

export const updateProfiledata = createAsyncThunk<IProfile, void, IThunkConfig<string>>("profile/update", async (_, thunkApi) => {
  try {
    const formData = getProfileData(thunkApi.getState()); // получение состояния вместо useSelector

    const response = await thunkApi.extra.api.put<IProfile>("/profile", formData);

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue("Error");
  }
});
