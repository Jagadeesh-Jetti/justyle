import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./contexts/dataContext";
import { FilterContextProvider } from "./contexts/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <FilterContextProvider>
            <App />
        </FilterContextProvider>
       
     </DataContextProvider>     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
