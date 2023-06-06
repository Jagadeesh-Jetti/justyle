import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/productCard/productCard";
import { FilterFunctions } from "../../services/FilterFunctions";
import { filterContext } from "../../contexts/filterContext";
import { Filters } from "./FiltersTab/filtersTab";
import "../ProductsListing/productListing.css";

export const ProductsListing = () => {
  const { dataState } = useContext(dataContext);
  const { filterState } = useContext(filterContext);

  const filterdProducts = FilterFunctions(dataState, filterState);

  return (
    <div className="mainPage">
      <div>
        <Navbar />
      </div>

      <div className="listingBody">
        <Filters />
        <ProductCard products={filterdProducts} />
      </div>
    </div>
  );
};
