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
import { AddressContextProvider } from "./contexts/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <DataContextProvider>
      <AuthContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <WishlistContextProvider>
              <AddressContextProvider>
                  <App />
              </AddressContextProvider>
              </WishlistContextProvider>
            </CartContextProvider>   
          </FilterContextProvider>
      </AuthContextProvider> 
        </DataContextProvider>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );