import { StateSchema } from "app/providers/StoreProvider";

export const getAuthData = (state: StateSchema) => state.user.authData;
