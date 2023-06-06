import { useContext } from "react";
import "../CartCard/cartCard.css";
import { wishlistContext } from "../../contexts/wishlistContext";
import { cartContext } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../contexts/dataContext";

export const CartCard = ({ products }) => {
  const { isProductInWishlist, addToWishlistHandler } =
    useContext(wishlistContext);
  const { removeFromCartHandler } = useContext(cartContext);
  const { dataDispatch } = useContext(dataContext);
  const navigate = useNavigate();
  return (
    <div>
      {products.map((product) => {
        const { _id, image, title, original_price, price, size } = product;
        return (
          <div key={_id} className="main-container">
            <div>
              <img src={image} alt="loading" className="image" />
            </div>
            <div>
              <h3> {title} </h3>
              <p> {price} </p>
              <p> Quantity: Yoh Jaggu! Need to fix this </p>
              <p> Size: {size} </p>
              <button
                onClick={() => {
                  isProductInWishlist(_id)
                    ? navigate("/wishlist")
                    : addToWishlistHandler(product, dataDispatch);
                }}
              >
                {isProductInWishlist(_id)
                  ? "Go to Wishlist"
                  : "Add to Wishlist"}
              </button>
              <button onClick={() => removeFromCartHandler(_id, dataDispatch)}>
                Remove from Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
