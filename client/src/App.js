import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home.js";
import ProductDetails from "./views/ProductDetails.js";
import AdminPanel from "./views/AdminPanel.js";
import ProductsGrid from "./views/ProductsGrid.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Profile from "./views/Profile.js";
import LoginPage from "./views/LoginPage.js";
import "./App.css";
import axios from "axios";
import { AuthContext } from "./contexts/AuthContext.js";

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Switch>
        {!loggedIn && (
          <Route path="/login">
            <LoginPage />
          </Route>
        )}
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
