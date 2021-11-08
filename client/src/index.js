import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./contexts/ProductsContext.js";
import { CartProvider } from "./contexts/CartContext.js";

ReactDOM.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
