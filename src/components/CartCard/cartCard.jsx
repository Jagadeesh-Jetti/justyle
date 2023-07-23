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
    <div className="main-container-cart">
      {products.map((product) => {
        const { _id, image, title, original_price, price, size } = product;
        return (
          <div key={_id} className="card-cart">
            <div className="cart-image-container">
              <img src={image} alt="loading" className="product-image" />
            </div>
            <div className="cart-details-card">
              <div> {title} </div>
              <div> {price} </div>
              <div> Quantity: Yoh Jaggu! Need to fix this </div>
              <div> Size: {size} </div>
              <button
                onClick={() => {
                  isProductInWishlist(_id)
                    ? navigate("/wishlist")
                    : addToWishlistHandler(product, dataDispatch);
                }}
              >
                {isProductInWishlist(_id)
                  ? "Go to Wishlist"
                  : "Move to Wishlist"}
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
