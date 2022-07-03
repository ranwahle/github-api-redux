import { useRef } from 'react';
import { Action } from "redux";
import { User } from "../model/user";



export interface RootState {
    userState: UserState;
}

export interface UserState {
    users: User[],
    currentUser: User | null,
    loading: false,
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    loading: false,
}

interface UserAction extends Action {
    type: 'UPDATE_USERS' | 'SEARCH_USERS' | 'SET_CURRENT_USER';
    payload: User[] | User | null | string;

}

export function userReducer(state: UserState = initialState, action: UserAction): UserState {
    switch (action.type) {

        case 'UPDATE_USERS': {
            return { ...state, users: action.payload as User[], loading: false, currentUser: null };
        }
        case 'SET_CURRENT_USER': {
            return { ...state, currentUser: action.payload as User }
        }
    }
    return state;
}