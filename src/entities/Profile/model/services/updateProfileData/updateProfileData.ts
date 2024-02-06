import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { IProfile, ValidateProfileError } from "../../types/profile";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfiledata = createAsyncThunk<IProfile, void, IThunkConfig<ValidateProfileError[]>>("profile/update", async (_, thunkApi) => {
  try {
    const formData = getProfileData(thunkApi.getState()); // получение состояния вместо useSelector

    const errors = validateProfileData(formData);

    if (errors.length) {
      return thunkApi.rejectWithValue(errors);
    }

    const response = await thunkApi.extra.api.put<IProfile>("/profile", formData);

    if (!response.data) {
      return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
