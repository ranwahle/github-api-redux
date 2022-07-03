import { combineReducers } from "redux";
import { userReducer } from "./github-users-reducer";

export const rootReucer = combineReducers({usersState: userReducer});

