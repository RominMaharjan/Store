import React from "react";
import { Link } from "react-router-dom";
import "./single.css";
import parse from 'html-react-parser';

function Single({ productDetailsData, addToCart }) {
  return (
    <>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Single Page</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="w3l_banner_nav_right">
          <div className="w3l_banner_nav_right_banner3">
            <h3>
              Best Deals For New Products<span className="blink_me"></span>
            </h3>
          </div>
          <div className="agileinfo_single">
            <h5>{productDetailsData.title}</h5>
            <div className="col-md-4 agileinfo_single_left singlePage">
              <img
                id="example"
                src={productDetailsData.images[0].imageName}
                alt=" "
                className="img-responsive singlePage"
              />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />
                  <label for="rating5">5</label>
                  <input id="rating4" type="radio" name="rating" value="4" />
                  <label for="rating4">4</label>
                  <input
                    id="rating3"
                    type="radio"
                    name="rating"
                    value="3"
                    checked
                  />
                  <label for="rating3">3</label>
                  <input id="rating2" type="radio" name="rating" value="2" />
                  <label for="rating2">2</label>
                  <input id="rating1" type="radio" name="rating" value="1" />
                  <label for="rating1">1</label>
                </span>
              </div>
              <div className="w3agile_description">
                <h4>Description :</h4>
                {productDetailsData.description === "" ? (
                  <p>
                    This is a product details page. It has no Description.
                    Description coming soon.
                  </p>
                ) : (
                 <p>{parse(productDetailsData.description)} </p> 
                )}
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4>
                    $ {productDetailsData.unitPrice[0].newPrice}{" "}
                    <span> $ {productDetailsData.unitPrice[0].oldPrice}</span>
                  </h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <div className="snipcart-details ">
                    <input
                      type="button"
                      value="Add to cart"
                      className="button addtoCartBtn text-center"
                      onClick={() => {
                        addToCart(productDetailsData);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
     

    </>
  );
}

export default Single;
