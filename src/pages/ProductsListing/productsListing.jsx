import React, { useContext } from "react";
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

  const filteredProducts = FilterFunctions(dataState, filterState);

  return (
    <div className="mainPage-list-container">
      <Navbar />

      <div className="listingBody">
        <div className="filter-container">
          <Filters />
        </div>

        <div className="list-container">
          {filteredProducts.length === 0 ? (
            <div className="center-content">
              <Loader />
              <div>No results found</div>
            </div>
          ) : (
            <ProductCard fromListing={true} products={filteredProducts} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};
