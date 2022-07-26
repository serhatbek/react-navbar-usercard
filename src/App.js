import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Error from './components/pages/Error/Error';
import Layout from './components/pages/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <Route path='/' element={<Layout />} />
// <Route index element={<Home />} />
// <Route path='about' element={<About />} />
// <Route path='contact' element={<Contact />} />
// <Route path='*' element={<Error />} />
