export interface IUser {
  id: string;
  username: string;
  avatar?: string;
}

export interface IUserSchema {
  authData?: IUser;

  _initited: boolean;
}
