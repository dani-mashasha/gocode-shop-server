import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./contexts/ProductsContext.js";
import { CartProvider } from "./contexts/CartContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { OrderProvider } from "./contexts/OrderContext.js";

ReactDOM.render(
  <AuthProvider>
    <OrderProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </OrderProvider>
  </AuthProvider>,
  document.getElementById("root")
);
