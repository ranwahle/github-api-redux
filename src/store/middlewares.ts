import { Middleware } from "redux";
import { queryUsers } from "../services/query-users";
import { RootState } from "./github-users-reducer";

export const queryUsersMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type === "SEARCH_USERS") {
      queryUsers(action.payload).then((data) =>
        store.dispatch({ type: "UPDATE_USERS", payload: data.items })
      );
    }
    return next(action);
  };
