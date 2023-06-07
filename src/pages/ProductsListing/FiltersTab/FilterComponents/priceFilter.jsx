import { useContext } from "react";
import { filterContext } from "../../../../contexts/filterContext";
import { FILTERACTIONS } from "../../../../reducers/Actions/FIlterActions";

export const PriceFilter = () => {
  const { filterState, filterDispatch } = useContext(filterContext);

  const sorting = [
    { labelName: "High to Low", value: "HTL" },
    { labelName: "Low to High", value: "LTH" },
  ];

  return (
    <div>
      <h3> Price Filter</h3>
      <div>
        {sorting.map((cur) => (
          <div>
            <label key={cur.value}>
              <input
                type="radio"
                value={cur.value}
                name="price"
                checked={filterState.selectedPriceSort === cur.value}
                onChange={(e) =>
                  filterDispatch({
                    type: FILTERACTIONS.FILTER_BY_PRICE,
                    payload: e.target.value,
                  })
                }
              />
              {cur.labelName}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
