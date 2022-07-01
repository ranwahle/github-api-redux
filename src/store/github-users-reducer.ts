import { User } from "../model/user";



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


export function userReducer(state: UserState = initialState, action: any): UserState {
    switch (action.type) {
        case 'UPDATE_USERS': {
            return {...state, users: action.payload, loading: false};
        }
    }
  return state;
}