import { Navbar } from "../../components/NavBar/navBar";
import { OrderSummary } from "../../components/OrderSummary/orderSummary";

export const Checkout = () => {
  return (
    <>
      <div>
        <Navbar />
        <h1> Checkout </h1>
        <div></div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </>
  );
};
