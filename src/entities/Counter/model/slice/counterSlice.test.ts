import { counterActions, counterReducer } from "./counterSlice";
import { ICounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("decrement", () => {
    const state: ICounterSchema = {
      value: 1,
    };

    expect(counterReducer(state as ICounterSchema, counterActions.decrement())).toEqual({
      value: 0,
    });
  });

  test("increment", () => {
    const state: ICounterSchema = {
      value: 1,
    };

    expect(counterReducer(state as ICounterSchema, counterActions.increment())).toEqual({
      value: 2,
    });
  });

  test("increment with empty state", () => {
    const state: ICounterSchema = {
      value: 1,
    };

    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 2,
    });
  });

  test("decrement with empty state", () => {
    const state: ICounterSchema = {
      value: 1,
    };

    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: 0,
    });
  });
});
