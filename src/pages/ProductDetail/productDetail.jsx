import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../components/NavBar/navBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../ProductDetail/productDetail.css";
import { wishlistContext } from "../../contexts/wishlistContext";
import { cartContext } from "../../contexts/cartContext";
import { dataContext } from "../../contexts/dataContext";
import { Footer } from "../../components/Footer/footer";
import { Loader } from "../../components/Loader/loader";
import { authContext } from "../../contexts/authContext";

export const ProductDetail = () => {
  const [clickedProduct, setClickedProduct] = useState({});
  const { addToCartHandler, isProductInCart } = useContext(cartContext);
  const { addToWishlistHandler, isProductInWishlist } =
    useContext(wishlistContext);
  const { authState } = useContext(authContext);
  const { dataDispatch } = useContext(dataContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  const getClickedProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      if (response.status === 200) {
        setClickedProduct(response.data.product);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(clickedProduct);
  useEffect(() => {
    getClickedProduct();
  }, [productId]);

  const {
    _id,
    image,
    title,
    description,
    original_price,
    price,
    size,
    rating,
    reviews,
  } = clickedProduct;

  return (
    <div>
      <Navbar />

      <div className="main-layout">
        {Object.keys(clickedProduct).length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="cards-layout">
              <div className="image-container">
                <img src={image} alt="loading" className="image" />
              </div>

              <div>
                <h2> {title} </h2>
                <div>{description}</div>

                <div className="reviews_class">
                  <div> {rating} </div>
                  <div className="hr"> | </div>
                  <div>{reviews}</div>
                </div>
                <div>
                  <div className="price">
                    <div> ₹{price} </div>
                    <div className="original-price"> ₹{original_price} </div>
                  </div>
                  <div> inclusive of all Taxes</div>
                </div>

                <p> Size: {size} </p>

                <button
                  className="btn"
                  onClick={() => {
                    authState.isLoggedIn
                      ? isProductInWishlist(_id)
                        ? navigate("/wishlist")
                        : addToWishlistHandler(clickedProduct, dataDispatch)
                      : navigate("/login");
                  }}
                >
                  {isProductInWishlist(_id)
                    ? "Go to Wishlist"
                    : "Add to Wishlist"}
                </button>

                <button
                  className="btn"
                  onClick={() => {
                    authState.isLoggedIn
                      ? isProductInCart(_id)
                        ? navigate("/cart")
                        : addToCartHandler(clickedProduct, dataDispatch)
                      : navigate("/login");
                  }}
                >
                  {isProductInCart(_id) ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
