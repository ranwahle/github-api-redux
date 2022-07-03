import { searchUsersMiddleware } from './search-users-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReucer } from './root-reducer';

export const store = createStore(rootReucer,
    composeWithDevTools(applyMiddleware(searchUsersMiddleware))
);
