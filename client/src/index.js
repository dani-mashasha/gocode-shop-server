import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./contexts/ProductsContext.js";
import { CartProvider } from "./contexts/CartContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";

ReactDOM.render(
  <AuthProvider>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </AuthProvider>,
  document.getElementById("root")
);
