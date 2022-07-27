import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import SharedLayout from './pages/Layout/SharedLayout';
import Products from './pages/Products/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
