import User from "@/interfaces/user";
import { UserActions } from "../actions/user";

type UserState = {
  loggedUser: User | undefined;
  users: User[] | undefined;
};

const initialState: UserState = {
  loggedUser: undefined,
  users: undefined,
};
const userReducer = (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loggedUser: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
