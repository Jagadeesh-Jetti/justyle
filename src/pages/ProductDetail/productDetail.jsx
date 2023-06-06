import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../components/NavBar/navBar";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../ProductDetail/productDetail.css";
import { wishlistContext } from "../../contexts/wishlistContext";
import { cartContext } from "../../contexts/cartContext";
import { dataContext } from "../../contexts/dataContext";

export const ProductDetail = () => {
  const [clickedProduct, setClickedProduct] = useState({});
  const { addToCartHandler, isProductInCart } = useContext(cartContext);
  const { addToWishlistHandler, isProductInWishlist } =
    useContext(wishlistContext);
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

  useEffect(() => {
    getClickedProduct();
  }, [productId]);

  const { _id, image, title, original_price, price, size, rating } =
    clickedProduct;
  return (
    <div>
      <Navbar />
      <h1>This is a product detail page</h1>
      <div className="main-layout">
        <div className="image-container">
          <img src={image} alt="loading" className="image" />
        </div>

        <div>
          <h3> {title} </h3>
          <p> {original_price} </p>
          <p> {price} </p>
          <p> {size} </p>
          <p> {rating} </p>

          <button
            onClick={() => {
              isProductInWishlist(_id)
                ? navigate("/cart")
                : addToWishlistHandler(clickedProduct, dataDispatch);
            }}
          >
            {isProductInWishlist(_id) ? "Go to Wishlist" : "Add to Wishlist"}
          </button>
          <button
            onClick={() => {
              isProductInCart(_id)
                ? navigate("/cart")
                : addToCartHandler(clickedProduct, dataDispatch);
            }}
          >
            {isProductInCart(_id) ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
