import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import PostComponent from './components/posts';
import MainLayout from './layouts/mainLayout';

function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/contact" element={Contact} />
          <Route path="/article/:id" element={PostComponent} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default Router;
