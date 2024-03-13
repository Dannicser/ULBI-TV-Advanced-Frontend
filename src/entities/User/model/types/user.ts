export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface IUserSchema {
  authData?: IUser;

  _initited: boolean;
}
