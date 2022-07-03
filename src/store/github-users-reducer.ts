import { createAction, createReducer } from '@reduxjs/toolkit';
import { buildQueries } from '@testing-library/react';
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
    type: string; // 'UPDATE_USERS' | 'SEARCH_USERS' | 'SET_CURRENT_USER';
    payload: User[] | User | null | string;

}

// export function userReducer(state: UserState = initialState, action: UserAction): UserState {
//     switch (action.type) {

//         case 'UPDATE_USERS': {
//             return { ...state, users: action.payload as User[], loading: false, currentUser: null };
//         }
//         case 'SET_CURRENT_USER': {
//             return { ...state, currentUser: action.payload as User }
//         }
//         case 'UPDATE_CURRENT_USER_DATA': {
//             return { ...state, currentUser: action.payload as User }
//         }
//     }
//     return state;
// }
const updateUsers = createAction<User[]>('UPDATE_USERS');
const setCurrentUser = createAction<User | null>('SET_CURRENT_USER');
const updateCurrentUserData = createAction<User>('UPDATE_CURRENT_USER_DATA');
export const userReducer = createReducer(initialState, builder => {
    builder.addCase(updateUsers, (state, action) => ({ ...state, users: action.payload as User[], loading: false }));
    builder.addCase(setCurrentUser, (state, action) => ({ ...state, currentUser: action.payload as User }));
    builder.addCase(updateCurrentUserData, (state, action) => ({ ...state, currentUser: action.payload as User }));
    builder.addDefaultCase((state) => state);
}) 