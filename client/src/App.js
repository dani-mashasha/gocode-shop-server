
import './App.css';
import { CartProvider } from './contexts/CartContext.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home.js';
import ProductDetails from './views/ProductDetails.js';
import { ProductsProvider } from './contexts/ProductsContext.js';
import AdminPanel from './views/AdminPanel.js';
import ProductsGrid from './views/ProductsGrid.js';



function App() {

  return (
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <ProductsProvider>
       <CartProvider>
          <Switch>

          <Route path="/products-grid">
              <ProductsGrid/>
             </Route>
            
             <Route path="/products/:id">
              <ProductDetails/>
             </Route>

             <Route path="/admin">
              <AdminPanel/>
             </Route>

             <Route path="/">
              <Home/>
             </Route>

           </Switch>
        </CartProvider>
        </ProductsProvider>
      </div>
    </Router>
    
  );
}

export default App;
