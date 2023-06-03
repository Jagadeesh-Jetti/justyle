import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/productCard/productCard";

export const ProductsListing = () => {
  const { dataState } = useContext(dataContext);
  return (
    <div>
      <Navbar />

      <ProductCard products={dataState.products} />
      {/* {dataState.products.map((product) => (
        <div key={product.id}>
          <h1>{product.category}</h1>
          <h1>{product.rating}</h1>
        </div>
      ))} */}
    </div>
  );
};
