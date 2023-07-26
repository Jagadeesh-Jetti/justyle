import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/home";
import { ProductsListing } from "./pages/ProductsListing/productsListing";
import { Cart } from "./pages/Cart/cart";
import { Wishlist } from "./pages/Wishlist/wishlist";
import { Signup } from "./pages/Signup/signup";
import { Login } from "./pages/Login/login";
import { ProductDetail } from "./pages/ProductDetail/productDetail";
import { RequireAuth } from "./services/RequireAuth";
import { Checkout } from "./pages/Checkout/checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation/orderConfirmation";
import AddressForm from "./components/Address/address";
import { EditAddress } from "./components/modals/EditAddress/EditAddress";
import { Profile } from "./pages/Profile/Profile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListing /> } />
       

        <Route path="/cart" element={ 
          <RequireAuth> 
            <Cart /> 
          </RequireAuth>} />
     
        <Route path="/wishlist" element={ 
          <RequireAuth> 
            <Wishlist /> 
          </RequireAuth>} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/oc" element={<OrderConfirmation />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/product/:productId" element={<ProductDetail />} />

          <Route path="/profile" element={<Profile />}/>

        
      </Routes>
    </div>
  );
}

export default App;
