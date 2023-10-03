import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { fetchUsers, setType } from "./store/users";

function App() {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

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
      <button onClick={()=>dispatch(fetchUsers())}>Get users</button>
    </div>
  );
}

export default App;
