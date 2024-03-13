import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { componentRender } from "shared/config/tests/renderWithRouter";
import { EditableProfileCard } from "./EditableProfileCard";
import { profileReducer } from "../../model/slice/profileSlice";

describe("EditableProfileCard", () => {
  test("switch to edit mode successfully", async () => {
    componentRender(<EditableProfileCard id={"1"} />, {
      initialState: {
        profile: {
          readonly: true,
          data: {
            id: "1",
            firstname: "dan",
            lastname: "dmitriev",
          },
        },
        user: {
          authData: { id: "1", username: "danic" },
        },
      },

      //@ts-ignore
      asyncReducers: { profile: profileReducer },
    });

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    expect(screen.getByTestId("EditableProfileCardHeader.SaveButton")).toBeInTheDocument();
  });

  test("switch to edit mode unsuccessfully", async () => {
    componentRender(<EditableProfileCard id={"1"} />, {
      initialState: {
        profile: {
          readonly: true,
          data: {
            id: "1",
            firstname: "dan",
            lastname: "dmitriev",
          },
        },
        user: {
          authData: { id: "2", username: "danic" },
        },
      },

      //@ts-ignore
      asyncReducers: { profile: profileReducer },
    });

    expect(screen.queryByTestId("EditableProfileCardHeader.EditButton")).not.toBeInTheDocument();
  });

  test("switch to edit mode and back successfully", async () => {
    componentRender(<EditableProfileCard id={"1"} />, {
      initialState: {
        profile: {
          readonly: true,
          data: {
            id: "1",
            firstname: "dan",
            lastname: "dmitriev",
          },
        },
        user: {
          authData: { id: "1", username: "danic" },
        },
      },

      //@ts-ignore
      asyncReducers: { profile: profileReducer },
    });

    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
    expect(screen.getByTestId("EditableProfileCardHeader.SaveButton")).toBeInTheDocument();
    await userEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));
    expect(screen.getByTestId("EditableProfileCardHeader.EditButton")).toBeInTheDocument();
  });

  test("change firstname", async () => {
    // const mockPutReq = jest.spyOn(api, "put");

    componentRender(<EditableProfileCard id={"1"} />, {
      initialState: {
        profile: {
          readonly: true,
          data: {
            id: "1",
            firstname: "dan",
            lastname: "dmitriev",
          },
        },
        user: {
          authData: { id: "1", username: "danic" },
        },
      },

      //@ts-ignore
      asyncReducers: { profile: profileReducer },
    });

    const editButton = screen.getByTestId("EditableProfileCardHeader.EditButton");

    await userEvent.click(editButton);

    expect(screen.getByTestId("ProfileCard.firstname")).toBeInTheDocument();

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "hello world");

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("hello world");

    const saveButton = screen.getByTestId("EditableProfileCardHeader.SaveButton");

    await userEvent.click(saveButton);
  });
});
