import { StateSchema } from "@/app/providers/StoreProvider";
import { getCounter } from "./getCounter";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 1,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({
      value: 1,
    });
  });
});
