import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Header({ setSearchData }) {
  const navigate = useNavigate();
  const [token, setToken] = useState();
  const { register, handleSubmit, resetField } = useForm({
    mode: "onTouched",
  });
  const handleRegistration = (data) => {
    setSearchData(data);
    navigate("/search");
    resetField("search");
  };

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  });

  const logout = () => {
    setToken(localStorage.clear());
    toast.success("Logout Successfully.");
    navigate("/");
  };
  return (
    <div>
      <div className="agileits_header">
        <div className="w3l_offers">
          <Link to="/">Today's special Offers !</Link>
        </div>
        <div className="w3l_search">
          <form
            onSubmit={handleSubmit(handleRegistration)}
            action="/search"
            method="post"
          >
            <input
              type="text"
              name="Product"
              placeholder="Search a Product"
              {...register("search")}
            />
            <input type="submit" value=" " />
          </form>
        </div>
        <div className="product_list_header">
          <form action="/cart" method="get" className="last">
            <fieldset>
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              <Link to="cart">
                <input
                  type="submit"
                  name="submit"
                  value="View your cart"
                  className="button"
                />
              </Link>
            </fieldset>
          </form>
        </div>
        {token ? (
          <div className="w3l_header_right">
            <ul>
              <li className="dropdown profile_details_drop">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-user" aria-hidden="true">
                    <h6>Hello User</h6>
                  </i>
                  <span className="caret"></span>
                </Link>

                <div >
                  <div className="dropbtn">
                    <ul className="dropdown-content">
                      <li>
                        <button
                          className="user-btn"
                          onClick={() => navigate("/profile")}
                        >
                          Profile
                        </button>
                      </li>
                      <li>
                        <button
                          className="user-btn"
                          onClick={() => {
                            logout();
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w3l_header_right">
            <ul>
              <li className="dropdown profile_details_drop">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-user" aria-hidden="true">
                    <h6>Home</h6>
                  </i>
                  <span className="caret"></span>
                </Link>

                <div>
                  <div className="dropbtn">
                    <ul className="dropdown-content text-center">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/signup">Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}

        <div className="w3l_header_right1">
          <h2>
            <Link to="contact">Contact Us</Link>
          </h2>
        </div>
        <div className="clearfix"> </div>
      </div>

      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">
                <span>Grocery</span> Store
              </Link>
            </h1>
          </div>
          <div className="w3ls_logo_products_left1">
            <ul className="special_items">
              <li>
                <Link to="Events">Events</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="About">About Us</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="Products">Best Deals</Link>
                <i>/</i>
              </li>
              <li>
                <Link to="Services">Services</Link>
              </li>
            </ul>
          </div>
          <br></br>
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                
                <a href="tel:(+0123) 234">(+012) 234</a>
                567
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:store@grocery.com">
                  store@grocery.com
                </a>
              </li> 
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
