import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/productCard/productCard";
import "../Wishlist/wishlist.css";

export const Wishlist = () => {
  const { dataState } = useContext(dataContext);

  return (
    <div>
      <Navbar />
      <h1>this is the wishlist </h1>
      <div className="wishlist-container">
        {<ProductCard fromWishlist={true} products={dataState?.wishlist} />}
      </div>

      {/* {dataState?.wishlist?.map((product) => (
        <div>
          <h1>{product.title}</h1>
        </div>
      ))} */}
    </div>
  );
};
