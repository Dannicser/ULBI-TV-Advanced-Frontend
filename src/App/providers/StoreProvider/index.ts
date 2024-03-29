import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import { StateSchema, IReduxStoreWithManager, IThunkExtraArg, IThunkConfig } from "./config/StateSchema";

export { StoreProvider, createReduxStore };
export type { StateSchema, IReduxStoreWithManager, AppDispatch, IThunkExtraArg, IThunkConfig };
