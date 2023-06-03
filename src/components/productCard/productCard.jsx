import "../productCard/productCard.css";
export const ProductCard = ({ products }) => {
  return (
    <div className="productsLayout">
      {products.length > 0 &&
        products.map((product) => {
          const { _id, image, title, original_price, price, size, rating } =
            product;
          return (
            <div key={_id} className="productCard">
              <div className="productImageDiv">
                <img src={image} alt="loading" className="productImage" />
              </div>
              <div className="content">
                <h3> {title} </h3>
                <p> Rs. {price}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
