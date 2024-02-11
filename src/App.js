import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import About from '../src/pages/About';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
