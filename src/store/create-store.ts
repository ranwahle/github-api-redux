import { conslogger, searchUsersMiddleware } from './search-users-middleware';
import { rootReucer } from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { updateCurrentUserMiddleware } from './update-user-middleware';

export const store = configureStore( {
    reducer: rootReucer,
    middleware: [searchUsersMiddleware, updateCurrentUserMiddleware, conslogger],
    devTools: true
}
// rootReucer,
   // composeWithDevTools(applyMiddleware(searchUsersMiddleware))
);
