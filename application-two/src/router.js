import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import PostComponent from './components/posts';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/contact" element={Contact} />
      <Route path="/article/:id" element={PostComponent} />
    </Routes>
    </BrowserRouter>
  );
}

export default Router;
