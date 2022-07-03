import { User } from "./model/user";
import { store } from "./store/create-store";
import { useEffect, useState } from "react";
import { createAction } from "@reduxjs/toolkit";

export function UsersList() {
const setGlobalCurrentUserAction = createAction<User>("SET_CURRENT_USER");
const  setGlobalCurrentUser = (user: User) => {
      store.dispatch(setGlobalCurrentUserAction(user));
    // store.dispatch({type: 'SET_CURRENT_USER', payload: user});
}

  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    setUsers(store.getState().usersState.users);
    return store.subscribe(() => {
        setUsers(store.getState().usersState.users)}
        );
  }, [users]);

  return (
    <>
      {users.map((user: User) => (
        <div>
          <div>
            <img src={user.avatar_url} alt="avatar"></img>
          </div>

          <button className="link" onClick={() => setGlobalCurrentUser(user)}>
            {" "}
            {user.login}
          </button>
        </div>
      ))}
    </>
  );
}
