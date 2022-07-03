import { Middleware } from "redux";
import { queryUsers } from "../services/query-users";
import { RootState } from "./github-users-reducer";

export const searchUsersMiddleware: Middleware<{}, RootState> = store => next => action => {
    if (action.type === 'SEARCH_USERS') {
        queryUsers(action.payload).then(data => {
            store.dispatch( { type: 'UPDATE_USERS', payload: data } );
        });
    }
    return next(action);
}




export const conslogger: Middleware<{}, RootState> =  store => next => action => {
    console.log(action);
    return next(action);
        
}
