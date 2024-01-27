import { getAuthData } from "./model/selectors/getAuthData/getAuthData";
import { userReducer, userActions } from "./model/slice/userSlice";
import { IUser, IUserSchema } from "./model/types/user";

export { userActions, userReducer, getAuthData, IUser, IUserSchema };
