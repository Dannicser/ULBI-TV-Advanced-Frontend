import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly", () => {
  test("should return correct value", () => {
    const data = true;

    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toBe(data);
  });

  test("should return correct value with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
