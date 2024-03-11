import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";
import { getProfileData } from "../../selectors/getProfileData/getProfileData";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { IProfile } from "entities/Profile";

export const updateProfiledata = createAsyncThunk<IProfile, string | undefined, IThunkConfig<ValidateProfileError[]>>(
  "profile/update",
  async (profileId, thunkApi) => {
    try {
      const formData = getProfileData(thunkApi.getState()); // получение состояния вместо useSelector

      const errors = validateProfileData(formData);

      if (errors.length) {
        return thunkApi.rejectWithValue(errors);
      }

      if (!profileId) {
        return thunkApi.rejectWithValue([]);
      }

      const response = await thunkApi.extra.api.put<IProfile>(`/profile/${profileId}`, formData);

      if (!response.data) {
        return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
