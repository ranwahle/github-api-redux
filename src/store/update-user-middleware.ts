import { CombinedState, Middleware } from "redux";

const querySingleUser = async (userLogin: string) => {
    const response = await fetch('https://api.github.com/users/' + userLogin);
    return response.json();
}

export const updateCurrentUserMiddleware: Middleware<{usersState: {}}, CombinedState<{usersState: {}}>> = store => next => action => {
    if (action.type === 'SET_CURRENT_USER' && action.payload) {
        querySingleUser(action.payload.login).then(data => {
            store.dispatch( { type: 'UPDATE_CURRENT_USER_DATA', payload: data } );
        });
    }
    return next(action);
}
