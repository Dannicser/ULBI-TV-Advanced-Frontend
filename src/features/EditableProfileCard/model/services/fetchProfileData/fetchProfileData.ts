import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IProfile } from "@/entities/Profile";

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>("profile/fetch", async (profileId, thunkApi) => {
  try {
    const response = await thunkApi.extra.api.get<IProfile>(`/profile/${profileId}`);

    if (!response.data) {
      throw Error();
    }

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue("Error");
  }
});
