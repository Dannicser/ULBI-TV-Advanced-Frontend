import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProfile, IProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfiledata } from "../services/updateProfileData/updateProfileData";

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  validateErrors: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state) => {
      state.readonly = !state.readonly;
      state.validateErrors = undefined;
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
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //update
      .addCase(updateProfiledata.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.validateErrors = undefined;
      })
      .addCase(updateProfiledata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.readonly = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfiledata.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
