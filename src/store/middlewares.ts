import { Action, Middleware, Store } from "redux";
import { RootState } from "./github-users-reducer";

export async function searchUser(query: string) {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    return data;
}

export const searchUsersMiddleware: Middleware<{}, RootState> = store => next => action => {
    if (action.type === 'SEARCH_USERS') {
         searchUser(action.payload).then(data => store.dispatch({ type: 'UPDATE_USERS', payload: data.items }) );
    }
    return next(action);
}

