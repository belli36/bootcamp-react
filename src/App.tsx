import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { About } from './components/about';
import Products from './components/products';
// import ShowProduct from './components/showProduct';
import ProductForm from './components/productForm';
import LogIn from './components/logIn';
import { RecoilRoot } from "recoil";
import Cart from './components/cart';
import { ShowProduct } from './components/showProduct';



function App() {
  const routes = ['Home', 'Products', 'About', 'LogIn', 'Cart'];
  return (
    <RecoilRoot>
      <div id='app' className="App">

        <Router>
          <div id="appNav">

            <nav id='navApp' className="navbar navbar-expand-lg bg-light container-fluid">
              <menu id='mainMenu'>
                <ul id='ulApp' className="navbar-nav me-auto mb-2 mb-lg-0">
                  {routes.map(route => <li id='liApp' className="nav-link active nav-item" aria-current="page" key={route}><Link to={route}>{route}</Link></li>)}
                </ul>
              </menu>
            </nav>
          </div>

          <Routes>

            <Route path="/Home" element={<Home />} />
            <Route path="LogIn" element={<LogIn />} />
            <Route path="Cart" element={<Cart />} />
            {/* <Route path="Home" element={<Home />} /> */}
            <Route path="/Products" element={<Products />} >
              {/* <Route path="/Products" element={<Products />} /> */}
              <Route path='ShowProduct/:_id' element={<ShowProduct />} />
              <Route path='ProductFormAdd/:mode' element={<ProductForm />} />
              <Route path='ProductFormEdit/:_id/:mode/:name/:price/:category' element={<ProductForm />} />
              {/* <Route path='Products/ProductForm' element={<ProductForm />} /> */}
            </Route>

            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>


    </RecoilRoot>
  );
}

export default App;
