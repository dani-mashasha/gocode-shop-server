import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";
import { ProductsProvider } from "./contexts/ProductsContext.js";
import { CartProvider } from "./contexts/CartContext.js";

// const { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = process.env;
// console.log(process.env.AUTH0_DOMAIN);

const AUTH0_DOMAIN = "dev-8chdq0gt.us.auth0.com";
const AUTH0_CLIENT_ID = "xgQF0IajgPXvQJFVVDlmGierdC7wjcUJ";

ReactDOM.render(
  <ProductsProvider>
    <CartProvider>
      <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </CartProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
