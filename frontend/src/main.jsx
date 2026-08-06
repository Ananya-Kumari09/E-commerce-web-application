import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";

import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <CartProvider>
      <WishlistProvider>

        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />

      </WishlistProvider>
    </CartProvider>

  </React.StrictMode>
);