import User from "@/interfaces/user";

export interface ILogInAction {
  readonly type: "LOG_IN";
  payload: User;
}

export interface ISetUsersAction {
  readonly type: "SET_USERS";
  payload: User[];
}

export type UserActions = ILogInAction | ISetUsersAction;
