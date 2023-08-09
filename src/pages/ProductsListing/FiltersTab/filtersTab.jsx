import { CategoryFilter } from "./FilterComponents/categoryFilter";
import { PriceFilter } from "./FilterComponents/priceFilter";
import { RatingFilter } from "./FilterComponents/ratingFIlter";
import "../FiltersTab/filtersTab.css";
import { useContext } from "react";
import { filterContext } from "../../../contexts/filterContext";
import { FILTERACTIONS } from "../../../reducers/Actions/FIlterActions";

export const Filters = () => {
  const { filterDispatch } = useContext(filterContext);
  return (
    <div>
      <div className="filters-header">
        <div>
          <h4>FILTERS</h4>
        </div>
        <div>
          <button
            className="btn-pl"
            onClick={() => filterDispatch({ type: FILTERACTIONS.CLEAR })}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="filters-container">
        <CategoryFilter />
        <PriceFilter />
        <RatingFilter />
      </div>
    </div>
  );
};
