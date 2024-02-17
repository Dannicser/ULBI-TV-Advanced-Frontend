import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddCommentFormSchema } from "../types/addCommentForm";

const initialState: IAddCommentFormSchema = {
  text: "",
  isLoading: false,
};

export const addCommentFormSlice = createSlice({
  name: "addCommentFormSlice",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
