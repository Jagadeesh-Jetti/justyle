import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./contexts/dataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
       <App />
     </DataContextProvider>     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
