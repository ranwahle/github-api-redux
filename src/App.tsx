import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReucer } from './store/root-reducer';
import { searchUsersMiddleware } from './store/middlewares';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReucer, composeWithDevTools(
  applyMiddleware(searchUsersMiddleware)))

function App() {
  const query = useRef<HTMLInputElement>(null)
  const getUsers = async () => {

    store.dispatch({type: 'SEARCH_USERS', payload: query.current!.value});
  }

  const [users, setUsers] = useState(store.getState().users.users)
  useEffect(() => {
    store.subscribe(() => setUsers(store.getState().users.users))
  })
  return (
    <div className="App">
      <input type="text" ref={query} placeholder="search user"></input>
      <button onClick={getUsers}>Get Users</button>
      {users.map(user => 
      <div>
        <div>
          <img src={user.avatar_url} alt="avatar"></img>
          </div>

        <button className="link"> {user.login}</button>
      
        </div>
      )}
    </div>
  );
}

export default App;
