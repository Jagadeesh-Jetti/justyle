import { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import { dataContext } from "../../contexts/dataContext";

import { Link, useNavigate } from "react-router-dom";
import { filterContext } from "../../contexts/filterContext";
import { FILTERACTIONS } from "../../reducers/Actions/FIlterActions";

import "../Home/home.css";
import { Footer } from "../../components/Footer/footer";
import { Loader } from "../../components/Loader/loader";

export const Home = () => {
  const { dataState } = useContext(dataContext);
  const { filterDispatch } = useContext(filterContext);
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Navbar />
      <div className="imageBannerDiv">
        <img
          src="/home_banner_1.jpg"
          alt="Banner_Image"
          className="bannerImage"
          onClick={() => navigate("/products")}
        />
      </div>

      <h2> Select from various categories</h2>

      {dataState.categories.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="category_cards_container">
            <div className="category_cards">
              {dataState.categories &&
                dataState?.categories?.map(
                  ({ _id, thumbnail, categoryName }) => {
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
                  }
                )}
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
        </>
      )}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
