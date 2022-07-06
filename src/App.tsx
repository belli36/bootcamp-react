import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { Xhr} from './components/xhr';
import { Home} from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Router } from "react-router-dom";
import { Products } from './components/products';
import { ShowProduct } from './components/showProduct';
import { About } from './components/about';



function App() {
  const routes = ['Home', 'Products', 'About'];
  return (
    <div className="App">
      {/* <Router> */}
        <menu id='mainMenu'>
          <ul>
            {routes.map(route => <li key={route}><Link to={route}>{route}</Link></li>)}
          </ul>
        </menu>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} >
            <Route path='Products/ShowProduct' element={<ShowProduct />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>

      {/* </Router> */}


      <Home></Home>
      <Products></Products>
    </div>
  );
}

export default App;
