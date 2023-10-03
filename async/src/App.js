import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { fetchUsers, setType } from "./store/users";
import { useEffect } from "react";

function App() {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
    .unwrap()
    .then((response) => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className="Movies">
      <h2>Movies</h2>
      <ul>
        { movies ?
        movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))
      : null }
      </ul>
      <button onClick={() => dispatch(addMovie({id: 3, title: "Mission Impossible"}))}>Add movie</button>
      <hr />
      <h3>User type: {users.type}</h3>
      <button onClick={() => dispatch(setType('admin'))}>Set Type</button>
      <hr/>

      <div>
        {users.loading ? 'loading' : null }
      </div>

      <ul>
        { users ? users.user.map((user) =>
          <li key={user.id}>{user.name}</li>
        ) : null }
      </ul>

      {/* <button onClick={()=>dispatch(fetchUsers())}>Get users</button> */}
    </div>
  );
}

export default App;
