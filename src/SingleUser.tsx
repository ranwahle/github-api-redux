import { User } from "./model/user";
import { store } from "./store/create-store";

export function SingleUser(props: {user: User | null}) {
    const {user} = props;
    const resetCurrentUser = () => {
        store.dispatch({type: 'SET_CURRENT_USER', payload: null});
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