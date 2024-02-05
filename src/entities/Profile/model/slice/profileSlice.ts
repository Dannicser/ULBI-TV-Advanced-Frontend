import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProfile, IProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfiledata } from "../services/updateProfileData/updateProfileData";

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state) => {
      state.readonly = !state.readonly;
    },
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //update
      .addCase(updateProfiledata.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(updateProfiledata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.readonly = true;
      })
      .addCase(updateProfiledata.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
