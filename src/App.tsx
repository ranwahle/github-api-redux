import { useEffect, useRef, useState } from 'react';
import './App.css';
import { UsersList } from './UsersList';
import { store } from './store/create-store';
import { strictEqual } from 'assert';

 
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
      <UsersList />
    </div>
  );
}

export default App;
