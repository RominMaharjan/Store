import React from 'react'
import { Link } from 'react-router-dom';
import "./product.css"

function Products({productList, addToCart, getProductDetails}) {
  return (
    <>
    {/* <!-- products-breadcrumb --> */}
    <div className="products-breadcrumb">
      <div className="container">
        <ul>
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>
            <Link to="/">Home</Link>
            <span>|</span>
          </li>
          <li>Products</li>
        </ul>
      </div>
    </div>
    {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
    <div className="banner">
      {/* <Navbarleft /> */}
      <div className="w3l_banner_nav_right">
        <div className="w3l_banner_nav_right_banner5">
          <h3>
            Best Deals For New Products<span className="blink_me"></span>
          </h3>
        </div>
        <div className="w3l_banner_nav_right_banner3_btm">
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/18.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Fruits & Vegetables</h4>
            <ol>
              <li>sunt in culpa qui officia</li>
              <li>commodo consequat</li>
              <li>sed do eiusmod tempor incididunt</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/19.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Dry Fruits</h4>
            <ol>
              <li>enim ipsam voluptatem officia</li>
              <li>tempora incidunt ut labore et</li>
              <li>vel eum iure reprehenderit</li>
            </ol>
          </div>
          <div className="col-md-4 w3l_banner_nav_right_banner3_btml">
            <div className="view view-tenth">
              <img
                src="../Assets/images/20.jpg"
                alt=" "
                className="img-responsive"
              />
              <div className="mask">
                <h4>Grocery Store</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt.
                </p>
              </div>
            </div>
            <h4>Vegetables</h4>
            <ol>
              <li>dolorem eum fugiat voluptas</li>
              <li>ut aliquid ex ea commodi</li>
              <li>magnam aliquam quaerat</li>
            </ol>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
          <h3 className="w3l_fruit">Products</h3>
          <div className="agile_top_brands_grids ">
          {productList.map((dataProduct) => {
                return (
                  <div
                    className="col-md-3 top_brand_left" 
                    key={dataProduct.id}
                  >
                    <div className="hover14 column productDetail">
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
                                    getProductDetails(dataProduct);
                                  }}
                                >
                                  {" "}
                                  <img
                                    src={dataProduct.images[0].imageName}
                                    alt=" "
                                    className="img-responsive"
                                  />
                                </button>

                                {/* </Link> */}
                                <p>{dataProduct.title}</p>
                                <h4>
                                  ${dataProduct.unitPrice[0].oldPrice}
                                  <span> $ {dataProduct.unitPrice[0].newPrice}</span>
                                </h4>
                              </div>
                              <div className="snipcart-details">
                                <input
                                  type="button"
                                  value="Add to cart"
                                  className="button text-center"
                                  onClick={() => {
                                    addToCart(dataProduct);
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
          }
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  </>
  )
}

export default Products