import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/productCard/productCard";
import { FilterFunctions } from "../../services/FilterFunctions";
import { filterContext } from "../../contexts/filterContext";

export const ProductsListing = () => {
  const { dataState } = useContext(dataContext);
  const { filterState } = useContext(filterContext);

  const filterdProducts = FilterFunctions(dataState, filterState);

  return (
    <div>
      <Navbar />

      <ProductCard products={filterdProducts} />
    </div>
  );
};
