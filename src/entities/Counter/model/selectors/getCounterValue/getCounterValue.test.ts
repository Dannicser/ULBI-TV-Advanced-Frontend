import { StateSchema } from "@/app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import { DeepPartial } from "@reduxjs/toolkit";

describe("getCounterValue", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 1,
      },
    };

    expect(getCounterValue(state as StateSchema)).toBe(1);
  });
});
