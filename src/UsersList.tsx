import { User } from "./model/user";
import { store } from "./store/create-store";
import { useEffect, useState } from "react";

export function UsersList() {
  const setGlobalCurrentUser = (user: any) => {
    store.dispatch({ type: "SET_CURRENT_USER", payload: user });
  };

  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    setUsers(store.getState().users.users);
    return store.subscribe(() => setUsers(store.getState().users.users));
  }, [users]);

  return (
    <>
      {users.map((user) => (
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
