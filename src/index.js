import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./contexts/dataContext";
import { FilterContextProvider } from "./contexts/filterContext";
import { AuthContextProvider } from "./contexts/authContext";
import { CartContextProvider } from "./contexts/cartContext";
import { WishlistContextProvider } from "./contexts/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DataContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <WishlistContextProvider>
              <App />
              </WishlistContextProvider>
            </CartContextProvider>   
          </FilterContextProvider>
        </DataContextProvider>   
      </AuthContextProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
