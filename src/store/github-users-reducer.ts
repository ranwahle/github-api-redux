import { User } from "../model/user";

const queryUsers = async(query: string) => {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    return data.items;
}

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