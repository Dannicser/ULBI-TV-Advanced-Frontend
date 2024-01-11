import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only param", () => {
    expect(classNames("class")).toBe("class");
  });

  test("with extra params", () => {
    expect(
      classNames(
        "class",
        {
          hidden: true,
          collapsed: false,
        },
        ["show"]
      )
    ).toBe("class show hidden");
  });

  test("with extra empty params", () => {
    expect(classNames("class", {}, [])).toBe("class");
  });
});
