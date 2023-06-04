import { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import { dataContext } from "../../contexts/dataContext";

import { Link } from "react-router-dom";
import { filterContext } from "../../contexts/filterContext";
import { FILTERACTIONS } from "../../reducers/Actions/FIlterActions";

import "../Home/home.css";

export const Home = () => {
  const { dataState } = useContext(dataContext);
  const { filterDispatch } = useContext(filterContext);
  return (
    <div>
      <Navbar />
      <h2> Select from various categories</h2>

      <div className="category_cards_container">
        <div className="category_cards">
          {dataState.categories &&
            dataState?.categories?.map(({ _id, thumbnail, categoryName }) => {
              return (
                <Link
                  className="category_img_link"
                  to="/products"
                  key={_id}
                  onClick={() =>
                    filterDispatch({
                      type: FILTERACTIONS.FILTER_BY_CATEGORY,
                      payload: categoryName,
                    })
                  }
                >
                  <img
                    src={thumbnail}
                    alt={categoryName}
                    className="category_image"
                  />
                </Link>
              );
            })}
        </div>
        <div className="category_name_container">
          {dataState.categories &&
            dataState?.categories?.map(({ _id, categoryName }) => {
              return (
                <p key={_id} className="category_text_name">
                  {categoryName}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};
