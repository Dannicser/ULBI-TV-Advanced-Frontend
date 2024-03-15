import { UserRole } from "./model/const/const";
import { getAuthData } from "./model/selectors/getAuthData/getAuthData";
import { getUserInited } from "./model/selectors/getUserInited/getUserInited";
import { isUserManager, isUserAdmin, getUserRoles } from "./model/selectors/roleSelector";
import { userReducer, userActions } from "./model/slice/userSlice";
import { IUser, IUserSchema } from "./model/types/user";

export { userActions, userReducer, getAuthData, getUserInited, isUserManager, isUserAdmin, UserRole, getUserRoles };
export type { IUser, IUserSchema };
