import { searchUsersMiddleware } from './search-users-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReucer } from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { updateCurrentUserMiddleware } from './update-user-middleware';

export const store = configureStore( {
    reducer: rootReucer,
    middleware: [searchUsersMiddleware, updateCurrentUserMiddleware],
    devTools: true
}
// rootReucer,
   // composeWithDevTools(applyMiddleware(searchUsersMiddleware))
);
