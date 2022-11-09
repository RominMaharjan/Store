import React from "react";
import "react-router-dom";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="newsletter">
        <div className="container">
          <div className="w3agile_newsletter_left">
            <h3>sign up for our newsletter</h3>
          </div>
          <div className="w3agile_newsletter_right">
            <form action="#" method="post">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                required="Please Enter Valid Email"
              />
              <input type="submit" value="subscribe now" />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="col-md-3 w3_footer_grid">
            <h3>information</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="events">Events</Link>
              </li>
              <li>
                <Link to="about">About Us</Link>
              </li>
              <li>
                <Link to="products">Best Deals</Link>
              </li>
              <li>
                <Link to="services">Services</Link>
              </li>
              <li>
                <Link to="Short">Short Codes</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 w3_footer_grid">
            <h3>policy info</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="faqs">FAQ</Link>
              </li>
              <li>
                <Link to="privacy">privacy policy</Link>
              </li>
              <li>
                <Link to="privacy">terms of use</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 w3_footer_grid">
            <h3>what in stores</h3>
            <ul className="w3_footer_grid_list">
              <li>
                <Link to="#">Pet Foods</Link>
              </li>
              <li>
                <Link to="#">Frozen Snacks</Link>
              </li>
              <li>
                <Link to="#">Kitchen</Link>
              </li>
              <li>
                <Link to="#">Branded Foods</Link>
              </li>
              <li>
                <Link to="#">Households</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 w3_footer_grid">
            <h3>twitter posts</h3>
            <ul className="w3_footer_grid_list1">
              <li>
                <label className="fa fa-twitter" aria-hidden="true"></label>
                <i>01 day ago</i>
                <span>
                  Non numquam <Link to="#">http://sd.ds/13jklf#</Link>
                  eius modi tempora incidunt ut labore et
                  <Link to="#">http://sd.ds/1389kjklf#</Link>quo nulla.
                </span>
              </li>
              <li>
                <label className="fa fa-twitter" aria-hidden="true"></label>
                <i>02 day ago</i>
                <span>
                  Con numquam <Link to="#">http://fd.uf/56hfg#</Link>
                  eius modi tempora incidunt ut labore et
                  <Link to="#">http://fd.uf/56hfg#</Link>quo nulla.
                </span>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
          <div className="agile_footer_grids">
            <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
              <div className="w3_footer_grid_bottom">
                <h4>100% secure payments</h4>
                <img src="../Assets/images/card.png" alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
              <div className="w3_footer_grid_bottom">
                <h5>connect with us</h5>
                <ul className="agileits_social_icons">
                  <li>
                    <Link to="#" className="facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="google">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="instagram">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dribbble">
                      <i className="fa fa-dribbble" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="wthree_footer_copy">
            <p>
              © 2016 Grocery Store. All rights reserved | Design by{" "}
              <Link to="http://w3layouts.com/">W3layouts</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
