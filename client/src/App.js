import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home.js";
import ProductDetails from "./views/ProductDetails.js";
import AdminPanel from "./views/AdminPanel.js";
import ProductsGrid from "./views/ProductsGrid.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Profile from "./views/Profile.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products-grid">
          <ProductsGrid />
        </Route>

        <Route path="/products/:id">
          <ProductDetails />
        </Route>

        <Route path="/admin">
          <AdminPanel />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
