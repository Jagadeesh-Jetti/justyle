import { useContext } from "react";
import { dataContext } from "../../../../contexts/dataContext";
import { filterContext } from "../../../../contexts/filterContext";
import { FILTERACTIONS } from "../../../../reducers/Actions/FIlterActions";
import "../filtersTab.css";

export const CategoryFilter = () => {
  const { dataState } = useContext(dataContext);
  const { filterState, filterDispatch } = useContext(filterContext);

  const categories =
    dataState.categories &&
    dataState.categories.reduce(
      (acc, cur) =>
        acc.includes(cur.categoryName) ? acc : [...acc, cur.categoryName],
      []
    );

  return (
    <div className="cat-main-container">
      <h5> CATEGORIES </h5>
      <div className="categoryCheckbox">
        {categories &&
          categories.map((category) => (
            <div key={category}>
              <label>
                <input
                  type="checkbox"
                  className="category-input-checkbox"
                  checked={filterState?.selectedCategory?.includes(category)}
                  onChange={() =>
                    filterDispatch({
                      type: FILTERACTIONS.FILTER_BY_CATEGORY,
                      payload: category,
                    })
                  }
                />
                {category}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};
