import { User } from "../model/user";
import { queryUsers } from "../services/query-users";



export interface RootState {
    userState: UserState;
}

export interface UserState {
    users: User[],
    loading: false,
}

const initialState: UserState = {
    users: [],
    loading: false,
}

let appStore: any;

export function setStore(store: any) {
    appStore = store;
}

export function userReducer(state: UserState = initialState, action: any): UserState {
    switch (action.type) {
        case 'SEARCH_USERS': {
            queryUsers(action.payload).then(data => {
                appStore.dispatch( { type: 'UPDATE_USERS', payload: data } );
            });
            return state;
        }
        case 'UPDATE_USERS': {
            return {...state, users: action.payload, loading: false};
        }
    }
  return state;
}