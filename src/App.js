import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/home";
import { ProductsListing } from "./pages/ProductsListing/productsListing";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListing /> } />
      </Routes>
    </div>
  );
}

export default App;
