import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "./Axios";

function Navbarleft() {
  const categoryURL = "/api/v4/category"
  const [categoryList, setCategoryList] = useState([]);
  const getCategoriesList = async () => {
    try{
      const response = await axiosClient.get(categoryURL);
      setCategoryList(response.data.data);
    }catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <>
      <div className="w3l_banner_nav_left">
        <nav className="navbar nav_bottom">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header nav_2">
            <button
              type="button"
              className="navbar-toggle collapsed navbar-toggle1"
              data-toggle="collapse"
              data-target="#bs-megadropdown-tabs"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav nav_1">
              {categoryList.map((category) => {
                let subcategories = category.subcategories;
                return (
                  <>
                    {subcategories.length > 0 ? (
                      <>
                        <li className="dropdown mega-dropdown active"key={category.id} >
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            {category.title}
                            <span className="caret"></span>
                          </Link>
                          <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
                            <div className="w3ls_vegetables">
                              <ul>
                                {subcategories.map((subcat) => {
                                  return (
                                    <>
                                      <li key={subcat.id}>
                                        <Link to={`category/${subcat.slug}`}>
                                          {subcat.title}
                                        </Link>
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to={`category/${category.slug}`}>
                            {category.title}
                          </Link>
                        </li>
                      </>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </nav>
      </div>
    </>
  );
}

export default Navbarleft;
