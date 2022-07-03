import { CombinedState, Middleware } from "redux";
import { queryUsers } from "../services/query-users";

export const searchUsersMiddleware: Middleware<{ usersState: {} },
    CombinedState<{ usersState: {} }>> = store => next => action => {
        if (action.type === 'SEARCH_USERS') {
            queryUsers(action.payload).then(data => {
                store.dispatch({ type: 'UPDATE_USERS', payload: data });
            });
        }
        return next(action);
    }



export const conslogger: Middleware<{}, CombinedState<{ usersState: {} }>> = store => next => action => {
    console.log(action);
    return next(action);

}
