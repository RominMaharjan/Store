import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerOptions } from "./formValidate";
import "./form.css";
import toast from "react-hot-toast";
import { axiosClient } from "./Axios";

function Login() {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const loginURL = `/api/v4/auth/login`;
  const signupURL = `/api/v4/auth/signup`;

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleRegistration = (data) => {
    const config = {
      username: data.username,
      password: data.password,
      client_id: 2,
      client_secret: "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey",
      grant_type: "password",
    };

    if (window.location.pathname === "/login") {
      const postLogin = async () => {
        try {
          const response = await axiosClient.post(loginURL, config);
          setStatus(response.status);
          localStorage.setItem("status", response.status);
          localStorage.setItem("accessToken", response.data.access_token);
          // if (status === 200) {
            toast.success("Login Successful");
            navigate("/");
          // }
        } catch (error) {
          console.log(error.response.data.errors[0].message);
              toast.error(`Error: ${error.response.data.errors[0].message}`, {
                style: {
                  border: "1px solid #713200",
                  padding: "16px",
                  color: "Red",
                },
                iconTheme: {
                  primary: "#713200",
                  secondary: "#FFFAEE",
                },
              });
            }
        }
        postLogin();
      };

    if (window.location.pathname === "/signup") {
      const postSignUp = async () => {
        try {
          await axiosClient.post(signupURL, data);
            toast.success("Successful Registration.");
            navigate("/login");
        } catch (error) {
          console.log(error.response.data.errors[0].message);
          toast.error(`Error: ${error.response.data.errors[0].message}`, {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "Red",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
            }
        }
     
      postSignUp();
    }
    resetField("username");
    resetField("first_name");
    resetField("last_name");
    resetField("email");
    resetField("mobile_number");
    resetField("password");
  };

  if (window.location.pathname === "/login") {
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
              <li>Sign In</li>
            </ul>
          </div>
        </div>

        <div className="banner">
          <div className="w3l_banner_nav_right">
            <div className="w3_login ">
              {status === 200 && navigate("/")}
              <h3>Sign In</h3>
              <div className="w3_login_module ">
                <div className="module form-module form-box">
                  <div>
                    <h2 className="text-center">Login to your account</h2>
                    <form
                      onSubmit={handleSubmit(handleRegistration)}
                      action="#"
                      method="post"
                    >
                      <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        {...register("username")}
                      />
                      {errors?.Name && (
                        <span className="error-text">
                          {errors.Name.message}
                        </span>
                      )}

                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register("password")}
                      />
                      <div className="link-cls">
                        <Link to="/forgetPassword" className="linking">
                          Forgot your password?
                        </Link>
                      </div>
                      <input type="submit" value="Login" />
                    </form>
                  </div>
                  {/* <div className="cta"> */}
                  <div className="link-fir">
                    <p>
                      Don't have an account?{" "}
                      <Link to="/signup" className="linking">
                        Sign Up
                      </Link>{" "}
                    </p>
                  </div>

                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* <!-- //login --> */}
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- //banner -->
		<!-- newsletter-top-serv-btm --> */}
        <div className="newsletter-top-serv-btm">
          <div className="container">
            <div className="col-md-4 wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <h3>Nam libero tempore</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </div>
            <div className="col-md-4 wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <h3>officiis debitis aut rerum</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </div>
            <div className="col-md-4 wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <h3>eveniet ut et voluptates</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* <!-- //newsletter-top-serv-btm --> */}
        {/* <Footer/> */}
      </>
    );
  }
  if (window.location.pathname === "/signup") {
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
              <li>Sign Up</li>
            </ul>
          </div>
        </div>

        <div className="banner">
          <div className="w3l_banner_nav_right">
            <div className="w3_login">
              <h3>Sign Up</h3>
              <div className="w3_login_module">
                <div className="module form-module form-box">
                  <div>
                    <h2 className="text-center">Create an account</h2>
                    <form
                      onSubmit={handleSubmit(handleRegistration)}
                      action="#"
                      method="post"
                    >
                      <input
                        type="text"
                        placeholder="First Name"
                        {...register("first_name", registerOptions.Name)}
                      />
                      {errors?.first_name && (
                        <span className="error-text">
                          {errors.first_name.message}
                        </span>
                      )}
                      <input
                        type="text"
                        placeholder="Last Name"
                        {...register("last_name", registerOptions.Name)}
                      />
                      {errors?.last_name && (
                        <span className="error-text">
                          {errors.last_name.message}
                        </span>
                      )}

                      <input
                        type="password"
                        placeholder="Password"
                        {...register("password", registerOptions.password)}
                      />
                      {errors?.password && (
                        <span className="error-text">
                          {errors.password.message}
                        </span>
                      )}

                      <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email", registerOptions.Email)}
                      />
                      {errors?.email && (
                        <span className="error-text">
                          {errors.email.message}
                        </span>
                      )}

                      <input
                        type="text"
                        placeholder="Phone Number"
                        {...register("mobile_number", registerOptions.Telephone)}
                      />
                      {errors?.mobile_number && (
                        <span className="error-text">
                          {errors.mobile_number.message}
                        </span>
                      )}

                      <input type="submit" value="Register" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- //login --> */}
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- //banner -->
		<!-- newsletter-top-serv-btm --> */}
        <div className="newsletter-top-serv-btm">
          <div className="container">
            <div className="col-md-4 wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <h3>Nam libero tempore</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </div>
            <div className="col-md-4 wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <h3>officiis debitis aut rerum</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </div>
            <div className="col-md-4 wthree_news_top_serv_btm_grid">
              <div className="wthree_news_top_serv_btm_grid_icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <h3>eveniet ut et voluptates</h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et.
              </p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* <!-- //newsletter-top-serv-btm --> */}
        {/* <Footer/> */}
      </>
    );
  }
}

export default Login;
