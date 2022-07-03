import { User } from "./model/user";
import { store } from "./store/create-store";
import { setCurrentUserAction } from "./store/github-users-reducer";

export function SingleUser(props: {user: User | null}) {
    const {user} = props;
    const resetCurrentUser = () => {
        store.dispatch(setCurrentUserAction(null));
    }
    return ( <div>
        <div>
          <img src={user!.avatar_url} alt="avatar"></img>
        </div>       
         <div>Name: {user!.name}</div>

        <div>Bio: {user!.bio}</div>
        <div>Public repos {user!.public_repos}</div>
        <button onClick={resetCurrentUser}>Reset</button>
      </div>)

}