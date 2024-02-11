export interface IUser {
  id: string;
  username: string;
}

export interface IUserSchema {
  authData?: IUser;

  _initited: boolean;
}
