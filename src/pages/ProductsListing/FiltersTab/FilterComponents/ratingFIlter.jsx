import { useContext } from "react";
import { FILTERACTIONS } from "../../../../reducers/Actions/FIlterActions";
import { filterContext } from "../../../../contexts/filterContext";
import "../filtersTab.css";

export const RatingFilter = () => {
  const { filterDispatch, filterState } = useContext(filterContext);
  return (
    <div className="rating-main-container">
      <h5 className="rating-header-name"> RATINGS </h5>
      <div className="rating-container">
        <div className="rating_numbers">
          <p> 1 </p>
          <p> 2 </p>
          <p> 3 </p>
          <p> 4 </p>
          <p> 5 </p>
        </div>
        <div>
          <input
            type="range"
            name="rating"
            className="ratingSlider"
            max="5"
            min="1"
            step="1"
            value={filterState.selectedRating}
            onChange={(event) =>
              filterDispatch({
                type: FILTERACTIONS.FILTER_BY_RATING,
                payload: event.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
