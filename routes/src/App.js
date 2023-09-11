import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';
import Users from './components/users';
import Admins from './components/admins';
import Guests from './components/guests';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">My app</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="posts" className="nav-link">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="profile" className="nav-link">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="users" className="nav-link">
              Users
            </NavLink>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="posts" element={<Posts/>}></Route>
        <Route path="posts/:id" element={<PostItem/>}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="users" element={<Users />}>
          <Route path="guests" element={<Guests />}></Route>
          <Route path="admins" element={<Admins />}></Route>
        </Route>
        <Route path="*" element={<><h1>404 - Page not found</h1></>}></Route>
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
