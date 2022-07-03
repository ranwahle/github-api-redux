import { User } from "../model/user";
import { searchUser } from "../services/users-query";


export interface UserState {
    users: User[],
    loading: false,
}

const initialState: UserState = {
    users: [],
    loading: false,
}


export function userReducer(state: UserState = initialState, action: any): UserState {
    switch (action.type) {
        case 'SEARCH_USERS': {
            return state;
             // TODO: Search user
             // Dispatch an action for UPDATE_USERS with the response 
        }
        case 'UPDATE_USERS': {
            return {...state, users: action.payload, loading: false};
        }
    }
  return state;
}