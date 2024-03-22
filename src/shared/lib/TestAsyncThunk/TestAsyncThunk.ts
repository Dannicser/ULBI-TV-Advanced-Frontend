import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

  constructor(actionCreator: AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    // const action = this.actionCreator(arg);
    // const result = await action(dispatch, getState, undefined);
  }
}

// вернуться потом - lesson #36
