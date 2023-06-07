import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/productCard/productCard";
import { FilterFunctions } from "../../services/FilterFunctions";
import { filterContext } from "../../contexts/filterContext";
import { Filters } from "./FiltersTab/filtersTab";
import "../ProductsListing/productListing.css";
import { Footer } from "../../components/Footer/footer";
import { Loader } from "../../components/Loader/loader";

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
        {filterdProducts.length === 0 ? (
          <Loader />
        ) : (
          <ProductCard products={filterdProducts} />
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
