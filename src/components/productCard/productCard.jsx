import { useContext } from "react";
import "../productCard/productCard.css";
import { cartContext } from "../../contexts/cartContext";
import { dataContext } from "../../contexts/dataContext";
import { wishlistContext } from "../../contexts/wishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

export const ProductCard = ({ products, fromWishlist, fromListing }) => {
  const { addToCartHandler, isProductInCart, updateQuantity } =
    useContext(cartContext);
  const { authState } = useContext(authContext);

  const {
    addToWishlistHandler,
    isProductInWishlist,
    removeFromWishlistHandler,
  } = useContext(wishlistContext);
  const { dataDispatch } = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="productsLayout">
      {products.length > 0 &&
        products.map((product) => {
          const { _id, image, title, original_price, price, size, rating } =
            product;

          // console.log(_id);
          const discount = Math.round((price / original_price) * 100);
          return (
            <div key={_id} className="productCard">
              <Link to={`/products/${_id}`}>
                <div className="productImageDiv">
                  <img src={image} alt="loading" className="productImage" />
                </div>
              </Link>

              <div className="content">
                <div className="title"> {title} </div>

                <div className="pcard-price-div">
                  <div className="price-div">
                    Rs.
                    {price}
                  </div>
                  <div className="og-price"> Rs.{original_price} </div>
                  <div> ({discount}%) </div>
                </div>
                {/* <p> {rating} </p> */}
              </div>

              <div className="buttons-container">
                {fromWishlist ? (
                  <button
                    className="btn"
                    onClick={() => {
                      authState.isLoggedIn
                        ? removeFromWishlistHandler(_id, dataDispatch)
                        : navigate("/login");
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => {
                      console.log(isProductInWishlist(_id));
                      authState.isLoggedIn
                        ? isProductInWishlist(_id)
                          ? navigate("/wishlist")
                          : addToWishlistHandler(product, dataDispatch)
                        : navigate("/login");
                    }}
                  >
                    {isProductInWishlist(_id)
                      ? "Go to Wishlist"
                      : "Add to Wishlist"}
                  </button>
                )}

                {fromListing ? (
                  <button
                    className="btn"
                    onClick={() => {
                      authState.isLoggedIn
                        ? isProductInCart(_id)
                          ? navigate("/cart")
                          : addToCartHandler(product, dataDispatch)
                        : navigate("/login");
                    }}
                  >
                    {isProductInCart(_id) ? "Go to Cart" : "Add to Cart"}
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => {
                      authState.isLoggedIn
                        ? isProductInCart(_id)
                          ? updateQuantity("increment", _id)
                          : addToCartHandler(product, dataDispatch)
                        : navigate("/login");
                    }}
                  >
                    {isProductInCart(_id) ? "Add quantity" : "Add to Cart"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};
