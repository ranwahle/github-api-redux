import { useEffect, useRef, useState } from 'react';
import './App.css';
import { UsersList } from './UsersList';
import { store } from './store/create-store';
import { strictEqual } from 'assert';
import { User } from './model/user';
import { SingleUser } from './SingleUser';

 
function App() {
  const query = useRef<HTMLInputElement>(null)
  const getUsers = async () => {

    store.dispatch({type: 'SEARCH_USERS', payload: query.current!.value});
  }


  const [currentUser, setCurrentUser] = useState(null as User | null);
  const [users, setUsers] = useState([] as User[])
  useEffect(() => {
    setUsers(store.getState().usersState.users);
    return store.subscribe(() => {
      setUsers(store.getState().usersState.users);
      setCurrentUser(store.getState().usersState.currentUser);
    });
  })
  return (
    <div className="App">
      <input type="text" ref={query} placeholder="search user"></input>
      <button onClick={getUsers}>Get Users</button>
      {currentUser && <SingleUser user={currentUser} /> ||  <UsersList /> }
    </div>
  );
}

export default App;
