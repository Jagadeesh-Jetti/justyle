import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/NavBar/navBar";

export const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h3> Order placed sucessfully </h3>
      <button onClick={() => navigate("/products")}> Go to products </button>
    </div>
  );
};
