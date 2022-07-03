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

const prefix = 'github-users';

export const updateUsersAction = createAction<User[]>(`${prefix} - UPDATE_USERS`);
export const setCurrentUserAction = createAction<User | null>(`${prefix} - SET_CURRENT_USER`);
export const updateCurrentUserDataAction = createAction<User>('UPDATE_CURRENT_USER_DATA');

export const userReducer = createReducer(initialState, builder => {
    builder.addCase(updateUsersAction, (state, action) => ({...state, users: action.payload as User[], loading: false, currentUser: null }));
   // builder.addCase(setCurrentUserAction, (state, action) => ({ ...state, currentUser: action.payload as User }));
   // builder.addCase(updateCurrentUserDataAction, (state, action) => ({ ...state, currentUser: action.payload as User }));
    builder.addMatcher(action => action.type === `${prefix} - SET_CURRENT_USER` || action.type === 'UPDATE_CURRENT_USER_DATA'
     ,(state, action) =>  ({...state, currentUser: action.payload as User}));
    builder.addDefaultCase((state) => state);
}) 