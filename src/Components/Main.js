import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "./Axios";
import "./main.css";

function Main({ addToCart, productList, getProductDetails }) {
  const categoryURL = "/api/v4/category";
  const [categoryList, setCategoryList] = useState([]);
  const getCategoriesList = async () => {
    try {
      const response = await axiosClient.get(categoryURL);
      setCategoryList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategoriesList();
  }, []);
  let imglink =
    "https://uat.ordering-farmshop.ekbana.net/storage/placeholder/placeholder-web.png";

  //Data fetch which has image available

  const imgData = productList.filter((img) => {
    return img.images[0].imageName !== imglink;
  });

  return (
    <div>
      {/* <!-- banner --> */}
      <div className="banner">
        <div className="w3l_banner_nav_right">
          <section className="slider">
            <div className="flexslider">
              <ul className="slides">
                <li>
                  <div className="w3l_banner_nav_right_banner">
                    <h3>
                      Make your <span>food</span> with Spicy.
                    </h3>
                    <div className="more">
                      <Link
                        to="products"
                        className="button--saqui button--round-l button--text-thick"
                        data-text="Shop now"
                      >
                        Shop now
                      </Link>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
          </section>
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- banner --> */}
      <div className="banner_bottom">
        <div className="wthree_banner_bottom_left_grid_sub"></div>
        <div className="wthree_banner_bottom_left_grid_sub1">
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img
                src="../Assets/images/4.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="wthree_banner_bottom_left_grid_pos">
                <h4>
                  Discount Offer <span>25%</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img
                src="../Assets/images/5.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="wthree_banner_btm_pos">
                <h3>
                  introducing <span>best store</span> for <i>groceries</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 wthree_banner_bottom_left">
            <div className="wthree_banner_bottom_left_grid">
              <img
                src="../Assets/images/6.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="wthree_banner_btm_pos1">
                <h3>
                  Save <span>Upto</span> $10
                </h3>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      {/* <!-- top-brands --> */}
      <div className="top-brands">
        <div className="container ">
          <h3 className="w3l_fruit">Hot Offers</h3>
          <div className="agile_top_brands_grids ">
            {imgData.length > 0 ? (
              imgData.map((item) => {
                return (
                  <div className="col-md-3 top_brand_left" key={item.id}>
                    <div className="hover14 column productCard">
                      <div className="agile_top_brand_left_grid">
                        <div className="agile_top_brand_left_grid1">
                          <figure>
                            <div className="snipcart-item block">
                              <div className="snipcart-thumb">
                                {/* <Link to={`/${categoryslug}/${dataProduct.id}`}> */}
                                {/* <Link to="/single"> */}
                                <button
                                  type="button"
                                  className="button text-center"
                                  onClick={() => {
                                    getProductDetails(item);
                                  }}
                                >
                                  {" "}
                                  <img
                                    src={item.images[0].imageName}
                                    alt=" "
                                    className="img-responsive"
                                  />
                                </button>

                                {/* </Link> */}
                                <p>{item.title}</p>
                                <h4>
                                  ${item.unitPrice[0].oldPrice}
                                  <span> $ {item.unitPrice[0].newPrice}</span>
                                </h4>
                              </div>
                              <div className="snipcart-details">
                                <input
                                  type="button"
                                  value="Add to cart"
                                  className="button text-center"
                                  onClick={() => {
                                    addToCart(item);
                                  }}
                                />
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="notAvailableProducts">
                <b>Items Will be Available Soon...</b>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <!-- //top-brands -->
<!-- fresh-vegetables --> */}
      <div className="fresh-vegetables">
        <div className="container">
          <h3>Top Products</h3>
          <div className="w3l_fresh_vegetables_grids">
            <div className="col-md-3 w3l_fresh_vegetables_grid w3l_fresh_vegetables_grid_left">
              <div className="w3l_fresh_vegetables_grid2">
                {categoryList.map((category) => {
                  return (
                    <ul key={category.id}>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <Link to={`category/${category.slug}`}>
                            {category.title}
                          </Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="col-md-9 w3l_fresh_vegetables_grid_right">
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <img
                    src="../Assets/images/8.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <div className="w3l_fresh_vegetables_grid1_rel">
                    <img
                      src="../Assets/images/7.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                    <div className="w3l_fresh_vegetables_grid1_rel_pos">
                      <div className="more m1">
                        <Link
                          to="products"
                          className="button--saqui button--round-l button--text-thick"
                          data-text="Shop now"
                        >
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w3l_fresh_vegetables_grid1_bottom">
                  <img
                    src="../Assets/images/10.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                  <div className="w3l_fresh_vegetables_grid1_bottom_pos">
                    <h5>Special Offers</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 w3l_fresh_vegetables_grid">
                <div className="w3l_fresh_vegetables_grid1">
                  <img
                    src="../Assets/images/9.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
                <div className="w3l_fresh_vegetables_grid1_bottom">
                  <img
                    src="../Assets/images/11.jpg"
                    alt=" "
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="clearfix"> </div>
              <div className="agileinfo_move_text">
                <div className="agileinfo_marquee">
                  <h4>
                    get <span className="blink_me">25% off</span> on first order
                    and also get gift voucher
                  </h4>
                </div>
                <div className="agileinfo_breaking_news">
                  <span> </span>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- //fresh-vegetables --> */}
    </div>
  );
}

export default Main;
