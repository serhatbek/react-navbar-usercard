import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import './styles/styles.scss';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import SharedLayout from './pages/Layout/SharedLayout';
import Products from './pages/Products/Products';
import SingleProduct from './pages/Products/SingleProduct/SingleProduct';
import SharedProductLayout from './pages/Layout/SharedProductLayout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  // const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          {/* <Route path='login' element={<Login setUser={setUser}></Login>} /> */}
          <Route path='dashboard' element={<Dashboard />} />
          {/* <Route
            path='dashboard'
            element={<Dashboard user={user}></Dashboard>}
          /> */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
