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
    <div>
      <h3> Categories </h3>
      {categories &&
        categories.map((category) => (
          <div className="categoryCheckbox" key={category}>
            <label>
              <input
                type="checkbox"
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
  );
};
