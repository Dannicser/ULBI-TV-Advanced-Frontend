import { StateSchema } from "app/providers/StoreProvider";

export const getUserInited = (state: StateSchema) => state.user._initited;
