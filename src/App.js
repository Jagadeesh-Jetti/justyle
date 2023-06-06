import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/home";
import { ProductsListing } from "./pages/ProductsListing/productsListing";
import { Cart } from "./pages/Cart/cart";
import { Wishlist } from "./pages/Wishlist/wishlist";
import { Signup } from "./pages/Signup/signup";
import { Login } from "./pages/Login/login";
import { ProductDetail } from "./pages/ProductDetail/productDetail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListing /> } />
        <Route path="/cart" element={<Cart /> } />
        <Route path="/wishlist" element={<Wishlist /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<ProductDetail />} />

        
      </Routes>
    </div>
  );
}

export default App;
