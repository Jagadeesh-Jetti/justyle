import { useContext } from "react";
import "../productCard/productCard.css";
import { cartContext } from "../../contexts/cartContext";
import { dataContext } from "../../contexts/dataContext";
import { wishlistContext } from "../../contexts/wishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

export const ProductCard = ({ products, fromWishlist }) => {
  const { addToCartHandler, isProductInCart } = useContext(cartContext);
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
          return (
            <div key={_id} className="productCard">
              <Link to={`/product/${_id}`}>
                <div className="productImageDiv">
                  <img src={image} alt="loading" className="productImage" />
                </div>
              </Link>

              <div className="content">
                <h4> {title} </h4>

                <p> Rs. {price}</p>
                {/* <p> {rating} </p> */}
              </div>

              {fromWishlist ? (
                <button
                  onClick={() => {
                    authState.isLoggedIn
                      ? removeFromWishlistHandler(_id, dataDispatch)
                      : navigate("/login");
                  }}
                >
                  Remove from wishlist
                </button>
              ) : (
                <button
                  onClick={() => {
                    authState.isLoggedIn
                      ? isProductInWishlist(_id)
                        ? navigate("/cart")
                        : addToWishlistHandler(product, dataDispatch)
                      : navigate("/login");
                  }}
                >
                  {isProductInWishlist(_id)
                    ? "Go to Wishlist"
                    : "Add to Wishlist"}
                </button>
              )}

              {/* {isProductInCart(_id) ? (
                <button>Go to cart</button>
              ) : (
                <button onClick={() => addToCartHandler(product, dataDispatch)}>
                  Add to cart
                </button>
              )} */}

              <button
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
            </div>
          );
        })}
    </div>
  );
};
